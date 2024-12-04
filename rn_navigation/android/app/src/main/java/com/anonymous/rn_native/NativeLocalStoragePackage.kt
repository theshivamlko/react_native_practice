//package com.anonymous.rn_native
//
//import com.facebook.react.TurboReactPackage
//import com.facebook.react.bridge.NativeModule
//import com.facebook.react.bridge.ReactApplicationContext
//import com.facebook.react.module.model.ReactModuleInfo
//import com.facebook.react.module.model.ReactModuleInfoProvider
//
//class NativeLocalStoragePackage : TurboReactPackage() {
//    override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? {
//
//        if (name == NativeLocalStorageSpec.NAME) {
//            return NativeLocalStorageSpecImplModule(reactContext)
//        } else {
//            return null
//        }
//    }
//
//    override fun getReactModuleInfoProvider(): ReactModuleInfoProvider {
//        mapOf(
//            NativeLocalStorageSpec.NAME to ReactModuleInfo(
//                NativeLocalStorageSpec.NAME,
//                "com.anonymous.rn_native.NativeLocalStorageSpecImplModule",
//                false,
//                false,
//                false,
//                false,
//
//                )
//        )
//    }
//}