package com.citridot.zebrasdk

import android.util.Log
import com.facebook.react.TurboReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class NativeLocalStoragePackage : TurboReactPackage() {
    override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? {
        Log.v("NativeLocalStoragePackage", "getModule: $name ${NativeLocalStorageModule.NAME}")
        return if (name == NativeLocalStorageModule.NAME) {
            NativeLocalStorageModule(reactContext)
        } else {
            null
        }
    }

    override fun getReactModuleInfoProvider(): ReactModuleInfoProvider {
        Log.v("NativeLocalStoragePackage", "getReactModuleInfoProvider")
        return ReactModuleInfoProvider {
            mapOf(
                NativeLocalStorageModule.NAME to ReactModuleInfo(
                    _name = NativeLocalStorageModule.NAME,
                    _className = NativeLocalStorageModule.NAME,
                    _canOverrideExistingModule = false,
                    _needsEagerInit = false,
                    isCxxModule = false,
                    isTurboModule = true
                )
            )
        }
    }
}