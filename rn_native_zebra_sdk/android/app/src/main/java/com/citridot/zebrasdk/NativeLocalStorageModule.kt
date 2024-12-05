package com.citridot.zebrasdk

import com.facebook.react.bridge.ReactApplicationContext

class NativeLocalStorageModule(reactContext: ReactApplicationContext) : NativeLocalStorageSpec(reactContext) {

    override fun getName() = NAME

    override fun setString(key: String?, value: String?) {
        reactApplicationContext.getSharedPreferences("MySharedPreference", 0).edit().putString(key, value).apply()
    }

    override fun getString(key: String?): String? {
        return reactApplicationContext.getSharedPreferences("MySharedPreference", 0).getString(key, "N/A")
    }

    companion object {
        const val NAME = "NativeLocalStorage"
    }
}