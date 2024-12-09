package com.citridot.zebrasdk

import android.util.Log
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.WritableArray


class NativeLocalStorageModule(reactContext: ReactApplicationContext) : NativeLocalStorageSpec(reactContext) {

    init {
        Log.v("NativeLocalStorageModule", "init")

    }
    override fun getName() = NAME
    override fun getDeviceList(): WritableArray? {
        TODO("Not yet implemented")
    }

    override fun connectToDevice(deviceId: String?): String? {
        TODO("Not yet implemented")
    }

    override fun startScan() {
        TODO("Not yet implemented")
    }

    override fun stopScan() {
        TODO("Not yet implemented")
    }

    override fun listenToRFID(onListen: Callback?) {
        TODO("Not yet implemented")
    }


    companion object {
        const val NAME = "NativeLocalStorage"
    }
}