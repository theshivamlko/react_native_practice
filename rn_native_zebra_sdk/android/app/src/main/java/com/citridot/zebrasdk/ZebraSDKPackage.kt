package com.citridot.zebrasdk

import com.facebook.react.TurboReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class ZebraSDKPackage : TurboReactPackage() {
    override fun getModule(p0: String, p1: ReactApplicationContext): NativeModule? {

        if (p0 == ZebraSDKModule.NAME) {
            return ZebraSDKModule(p1)
        } else
            return null
    }

    override fun getReactModuleInfoProvider(): ReactModuleInfoProvider {
        return ReactModuleInfoProvider {
            mapOf(
                ZebraSDKModule.NAME to ReactModuleInfo(
                    _name = ZebraSDKModule.NAME,
                    _className = ZebraSDKModule.NAME,
                    _canOverrideExistingModule = false,
                    _needsEagerInit = false,
                    isCxxModule = false,
                    isTurboModule = true
                )
            )
        }
    }


}