package com.citridot.zebrasdk

import android.util.Log
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.zebra.sdk.printer.discovery.BluetoothDiscoverer

class NativeZebraSDKModule(reactApplicationContext: ReactApplicationContext) : NativeZebraSDKSpec(reactApplicationContext) {

    override fun getName() = NAME

    override fun getAvailableDevices(promise: Promise?) {
        try {
            BluetoothDiscoverer.findPrinters(reactApplicationContext, object : BluetoothDiscoveryHandle(object : onResultCallback {
                override fun onResult(result: List<Map<String, String>>) {
                    Log.v("ZebraSDKModule", "getAvailableDevices onResult ${result.size}")
                    promise?.resolve(result)
                }

                override fun onError(error: String) {
                    Log.v("ZebraSDKModule", "getAvailableDevices onError $error")
                    promise?.reject("Error", error)
                }
            }) {})


        } catch (e: Exception) {
            promise?.reject("Error", e.message)
        }

    }

    override fun connectToDevice(deviceId: String?): String {
        return ""
    }

    companion object {
        const val NAME = "ZebraSDKModule"
    }

}