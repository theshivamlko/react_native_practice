//package com.anonymous.rn_native
//
//import android.content.SharedPreferences
//import android.util.Log
//import com.facebook.react.bridge.ReactApplicationContext
//
//class NativeLocalStorageSpecImplModule(reactContext: ReactApplicationContext) : NativeLocalStorageSpec(reactContext) {
//
//    override fun getName(): String {
//        Log.v("NativeLocalStorageSpecImpl1", "getName ${NativeLocalStorageSpec.NAME}")
//        return NativeLocalStorageSpec.NAME
//    }
//
//    override fun setItem(value: String?, key: String?) {
//        Log.v("NativeLocalStorageSpecImpl1", "setItem $key $value")
//        reactApplicationContext.getSharedPreferences("NativeLocalStorage", SharedPreferences.MODE_PRIVATE).edit().putString(key, value).apply()
//        TODO("Not yet implemented")
//    }
//
//    override fun getItem(key: String?): String? {
//      val value:String=  reactApplicationContext.getSharedPreferences("NativeLocalStorage", SharedPreferences.MODE_PRIVATE).getString(key)
//        Log.v("NativeLocalStorageSpecImpl1", "setItem $key $value")
//        TODO("Not yet implemented")
//    }
//
//    override fun removeItem(key: String?) {
//        TODO("Not yet implemented")
//    }
//
//    override fun clear() {
//        TODO("Not yet implemented")
//    }
//
//
//}
//
