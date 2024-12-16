package com.citridot.zebrasdk;

import android.content.Context;
import android.os.AsyncTask;
import android.os.Handler;
import android.util.Log;

import com.zebra.rfid.api3.Antennas;
import com.zebra.rfid.api3.ENUM_TRANSPORT;
import com.zebra.rfid.api3.HANDHELD_TRIGGER_EVENT_TYPE;
import com.zebra.rfid.api3.INVENTORY_STATE;
import com.zebra.rfid.api3.InvalidUsageException;
import com.zebra.rfid.api3.OperationFailureException;
import com.zebra.rfid.api3.RFIDReader;
import com.zebra.rfid.api3.ReaderDevice;
import com.zebra.rfid.api3.Readers;
import com.zebra.rfid.api3.RfidEventsListener;
import com.zebra.rfid.api3.RfidReadEvents;
import com.zebra.rfid.api3.RfidStatusEvents;
import com.zebra.rfid.api3.SESSION;
import com.zebra.rfid.api3.SL_FLAG;
import com.zebra.rfid.api3.STATUS_EVENT_TYPE;
import com.zebra.rfid.api3.TagData;
import com.zebra.scannercontrol.DCSScannerInfo;
import com.zebra.scannercontrol.FirmwareUpdateEvent;
import com.zebra.scannercontrol.IDcsSdkApiDelegate;

import java.util.ArrayList;

public class ZebraRFIDUtil implements IDcsSdkApiDelegate, Readers.RFIDReaderEventHandler {
    private Readers readers;
    private ArrayList<ReaderDevice> availableRFIDReaderList;
    private ReaderDevice readerDevice;
    private RFIDReader reader;
    private Context context;
    private ArrayList<DCSScannerInfo> scannerList=new ArrayList<>();
    private EventHandler eventHandler;
    private int MAX_POWER = 270;

    ZebraRFIDUtil(Context context) {
        this.context = context;
        readers = new Readers(context, ENUM_TRANSPORT.BLUETOOTH);
        readers.attach(this);
    }
    void onCreate() {
        scannerList = new ArrayList<>();
        // Select bluetooth as connection mode
        // add listeners
        try {
            // Scan paired RFID Devices
            availableRFIDReaderList = readers.GetAvailableRFIDReaderList();
            Log.d("MyRFID", "CreateInstanceTask BLUETOOTH availableRFIDReaderList " + availableRFIDReaderList.size());

            // Get first paired Device
            readerDevice = availableRFIDReaderList.get(0);
            Log.d("MyRFID", "readerDevice name" + readerDevice.getName());
            Log.d("MyRFID", "readerDevice address" + readerDevice.getAddress());
            Log.d("MyRFID", "readerDevice serial" + readerDevice.getSerialNumber());
            reader = readerDevice.getRFIDReader();
            Log.d("MyRFID", "reader " + reader.getHostName());
            reader.connect();
            Log.d("MyRFID", "reader Connected "+reader.isConnected());
            Log.d("MyRFID", "reader getTransport "+reader.getTransport());
            Log.d("MyRFID", "");

            Log.d("MyRFID", "Thread start");
            new Thread(runnable).start();


        } catch (InvalidUsageException e) {
            e.printStackTrace();
        } catch (OperationFailureException e) {
            throw new RuntimeException(e);
        }
    }

    Runnable runnable = new Runnable() {
        @Override
        public void run() {
            try {
                // Configure Reader
                // receive events from reader
                if (eventHandler == null)
                    eventHandler = new EventHandler();
                reader.Events.addEventsListener(eventHandler);
                // HH event
                reader.Events.setHandheldEvent(true);
                // tag event with tag data
                reader.Events.setTagReadEvent(true);
                reader.Events.setAttachTagDataWithReadEvent(false);
                // power levels are index based so maximum power supported get the last one
                MAX_POWER = reader.ReaderCapabilities.getTransmitPowerLevelValues().length - 1;
                // set antenna configurations
                Antennas.AntennaRfConfig config = reader.Config.Antennas.getAntennaRfConfig(1);
                config.setTransmitPowerIndex(MAX_POWER);
                config.setrfModeTableIndex(0);
                config.setTari(0);
                reader.Config.Antennas.setAntennaRfConfig(1, config);
                // Set the singulation control
                Antennas.SingulationControl s1_singulationControl = reader.Config.Antennas.getSingulationControl(1);
                s1_singulationControl.setSession(SESSION.SESSION_S0);
                s1_singulationControl.Action.setInventoryState(INVENTORY_STATE.INVENTORY_STATE_A);
                s1_singulationControl.Action.setSLFlag(SL_FLAG.SL_ALL);
                reader.Config.Antennas.setSingulationControl(1, s1_singulationControl);
                // delete any prefilters
                reader.Actions.PreFilters.deleteAll();




                Log.d("MyRFID", "Start Scan");

                reader.Actions.Inventory.perform();
                new Handler().postDelayed(new Runnable() {
                    @Override
                    public void run() {
                        Log.d("MyRFID", "Stop Scan");

                        try {
                            reader.Actions.Inventory.stop();
                        } catch (InvalidUsageException e) {
                            throw new RuntimeException(e);
                        } catch (OperationFailureException e) {
                            throw new RuntimeException(e);
                        }
                    }
                },3000);

                //   String in_xml = "<inArgs><scannerID>" + scannerID+ "</scannerID></inArgs>";

            } catch (InvalidUsageException | OperationFailureException e) {
                Log.d("MyRFID", "Thread error1 "+e.getMessage());
                e.printStackTrace();
            }catch (Exception e){
                Log.d("MyRFID", "Threadxc error2 "+e.getMessage());
                e.printStackTrace();
            }
        }
    };


    /* Listener for RFID Reader *
    * */
    @Override
    public void RFIDReaderAppeared(ReaderDevice readerDevice) {
        Log.d("MyRFID", "RFIDReaderAppeared =======================");
        Log.d("MyRFID", "RFIDReaderAppeared " + readerDevice.getName());
        Log.d("MyRFID", "RFIDReaderAppeared " + readerDevice.getAddress());
        Log.d("MyRFID", "RFIDReaderAppeared " + readerDevice.getSerialNumber());
        Log.d("MyRFID", "RFIDReaderAppeared " + readerDevice.getRFIDReader());
    }

    @Override
    public void RFIDReaderDisappeared(ReaderDevice readerDevice) {
        Log.d("MyRFID", "RFIDReaderDisappeared " + readerDevice.getName());
        Log.d("MyRFID", "RFIDReaderDisappeared " + readerDevice.getAddress());
        Log.d("MyRFID", "RFIDReaderDisappeared " + readerDevice.getSerialNumber());
        Log.d("MyRFID", "RFIDReaderDisappeared " + readerDevice.getRFIDReader());
    }

    @Override
    public void dcssdkEventScannerAppeared(DCSScannerInfo dcsScannerInfo) {
        Log.d("MyRFID", "dcssdkEventScannerAppeared " + dcsScannerInfo.getScannerID());
        Log.d("MyRFID", "dcssdkEventScannerAppeared " + dcsScannerInfo.getScannerName());
        Log.d("MyRFID", "dcssdkEventScannerAppeared " + dcsScannerInfo.getScannerModel());
        Log.d("MyRFID", "dcssdkEventScannerAppeared " + dcsScannerInfo.getScannerHWSerialNumber());

    }

    @Override
    public void dcssdkEventScannerDisappeared(int i) {
        Log.d("MyRFID", "dcssdkEventScannerDisappeared " + i);

    }

    @Override
    public void dcssdkEventCommunicationSessionEstablished(DCSScannerInfo dcsScannerInfo) {
        Log.d("MyRFID", "dcssdkEventCommunicationSessionEstablished " + dcsScannerInfo.getScannerID());
        Log.d("MyRFID", "dcssdkEventCommunicationSessionEstablished " + dcsScannerInfo.getScannerName());
        Log.d("MyRFID", "dcssdkEventCommunicationSessionEstablished " + dcsScannerInfo.getScannerModel());
        Log.d("MyRFID", "dcssdkEventCommunicationSessionEstablished " + dcsScannerInfo.getScannerHWSerialNumber());
        Log.d("MyRFID", "dcssdkEventCommunicationSessionEstablished " + dcsScannerInfo.getAuxiliaryScanners());

    }

    @Override
    public void dcssdkEventCommunicationSessionTerminated(int i) {
        Log.d("MyRFID", "dcssdkEventCommunicationSessionTerminated " + i);

    }

    @Override
    public void dcssdkEventBarcode(byte[] barcodeData, int i, int i1) {
        String s = new String(barcodeData);
       // context.barcodeData(s);
        Log.d("MyRFID", "dcssdkEventBarcode barCode =" + s);
    }

    @Override
    public void dcssdkEventImage(byte[] bytes, int i) {
        Log.d("MyRFID", "dcssdkEventImage");

    }

    @Override
    public void dcssdkEventVideo(byte[] bytes, int i) {
        Log.d("MyRFID", "dcssdkEventVideo");

    }

    @Override
    public void dcssdkEventBinaryData(byte[] bytes, int i) {
        Log.d("MyRFID", "dcssdkEventBinaryData");

    }

    @Override
    public void dcssdkEventFirmwareUpdate(FirmwareUpdateEvent firmwareUpdateEvent) {
        Log.d("MyRFID", "dcssdkEventFirmwareUpdate");

    }

    @Override
    public void dcssdkEventAuxScannerAppeared(DCSScannerInfo dcsScannerInfo, DCSScannerInfo dcsScannerInfo1) {
        Log.d("MyRFID", "dcssdkEventAuxScannerAppeared");

    }


    public class EventHandler implements RfidEventsListener {
        // Read Event Notification
        public void eventReadNotify(RfidReadEvents e) {
            Log.d("MyRFID", "eventReadNotify");
            TagData[] myTags = reader.Actions.getReadTags(100);
            Log.d("MyRFID", "eventReadNotify "+myTags.length);
            if (myTags != null) {
                for (int index = 0; index < myTags.length; index++) {
                    //  Log.d(TAG, "Tag ID " + myTags[index].getTagID());
                    Log.d("MyRFID", "Tag ID" + myTags[index].getTagID() + "RSSI value " + myTags[index].getPeakRSSI());
                    Log.d("MyRFID", "RSSI value " + myTags[index].getPeakRSSI());
                    /* To get the RSSI value*/   //   Log.d(TAG, "RSSI value "+ myTags[index].getPeakRSSI());

                }
                //new RFIDHandler.AsyncDataUpdate().execute(myTags);
            }
        }

        // Status Event Notification
        public void eventStatusNotify(RfidStatusEvents rfidStatusEvents) {
            Log.d("MyRFID", "Status Notification: " + rfidStatusEvents.StatusEventData.getStatusEventType());
            if (rfidStatusEvents.StatusEventData.getStatusEventType() == STATUS_EVENT_TYPE.HANDHELD_TRIGGER_EVENT) {
                if (rfidStatusEvents.StatusEventData.HandheldTriggerEventData.getHandheldEvent() == HANDHELD_TRIGGER_EVENT_TYPE.HANDHELD_TRIGGER_PRESSED) {
                    new AsyncTask<Void, Void, Void>() {
                        @Override
                        protected Void doInBackground(Void... voids) {
                            Log.d("MyRFID", "HANDHELD_TRIGGER_PRESSED");
                        //    context.handleTriggerPress(true);
                            return null;
                        }
                    }.execute();
                }
                if (rfidStatusEvents.StatusEventData.HandheldTriggerEventData.getHandheldEvent() == HANDHELD_TRIGGER_EVENT_TYPE.HANDHELD_TRIGGER_RELEASED) {
                    new AsyncTask<Void, Void, Void>() {
                        @Override
                        protected Void doInBackground(Void... voids) {
                        //    context.handleTriggerPress(false);
                            Log.d("MyRFID", "HANDHELD_TRIGGER_RELEASED");
                            return null;
                        }
                    }.execute();
                }
            }
            if (rfidStatusEvents.StatusEventData.getStatusEventType() == STATUS_EVENT_TYPE.DISCONNECTION_EVENT) {
                new AsyncTask<Void, Void, Void>() {
                    @Override
                    protected Void doInBackground(Void... voids) {

                        // disconnect();
                        return null;
                    }
                }.execute();
            }

        }
    }
}
