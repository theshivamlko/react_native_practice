package com.citridot.zebrasdk

import android.util.Log
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.WritableArray


class NativeLocalStorageModule(reactContext: ReactApplicationContext) : NativeLocalStorageSpec(reactContext) {

    init {
        Log.v("NativeLocalStorageModule", "init")

    }

    override fun getName() = NAME

    override fun getDeviceList(): WritableArray? {
        Log.v("NativeLocalStorageModule", "NativeLocalStorageModule")
        // return a list as WritableArray
        var list = Arguments.createArray()

        return list
    }

    override fun connectToDevice(deviceId: String?): String? {
        Log.v("NativeLocalStorageModule", "connectToDevice")
        return ""
    }

    override fun startScan() {
        Log.v("NativeLocalStorageModule", "startScan")

    }

    override fun stopScan() {
        Log.v("NativeLocalStorageModule", "stopScan")
    }

    override fun listenToRFID(onListen: Callback?) {
        Log.v("NativeLocalStorageModule", "listenToRFID $onListen")
    }

    companion object {
        const val NAME = "NativeLocalStorage"
    }
}