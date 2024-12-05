package com.citridot.zebrasdk

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.zebra.sdk.printer.discovery.BluetoothDiscoverer
import com.zebra.sdk.printer.discovery.DiscoveredPrinter
class ZebraSDKModule(reactApplicationContext: ReactApplicationContext) : NativeZebraSDKSpec(reactApplicationContext) {




    override fun getAvailableDevices(promise: Promise?) {

        try {
            BluetoothDiscoverer.findPrinters(reactApplicationContext, object : BluetoothDiscoveryHandle( object : onResultCallback {
                override fun onResult(result: List<Map<String, String>>) {
                    promise?.resolve(result)
                }

                override fun onError(error: String) {
                    promise?.reject("Error", error)
                }
            }) {})


        } catch (e: Exception) {
            promise?.reject("Error", e.message)
        }

    }

    override fun connectToDevice(deviceId: String?): String {
        TODO("Not yet implemented")
    }

}