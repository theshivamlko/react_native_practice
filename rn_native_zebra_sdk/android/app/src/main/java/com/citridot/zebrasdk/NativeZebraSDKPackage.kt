//package com.citridot.zebrasdk
//
//import android.util.Log
//import com.facebook.react.TurboReactPackage
//import com.facebook.react.bridge.NativeModule
//import com.facebook.react.bridge.ReactApplicationContext
//import com.facebook.react.module.model.ReactModuleInfo
//import com.facebook.react.module.model.ReactModuleInfoProvider
//
//class NativeZebraSDKPackage : TurboReactPackage() {
//    override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? {
//        Log.v("NativeZebraSDKPackage", "getModule: $name ${NativeZebraSDKModule.NAME}")
//        return if (name == NativeZebraSDKModule.NAME) {
//            NativeZebraSDKModule(reactContext)
//        } else {
//            null
//        }
//    }
//
//    override fun getReactModuleInfoProvider(): ReactModuleInfoProvider {
//        return ReactModuleInfoProvider {
//            mapOf(
//                NativeZebraSDKModule.NAME to ReactModuleInfo(
//                    _name = NativeZebraSDKModule.NAME,
//                    _className = NativeZebraSDKModule.NAME,
//                    _canOverrideExistingModule = false,
//                    _needsEagerInit = false,
//                    isCxxModule = false,
//                    isTurboModule = true
//                )
//            )
//        }
//    }
//
//
//}