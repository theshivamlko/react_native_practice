package com.citridot.zebrasdk

import com.zebra.sdk.printer.discovery.DiscoveredPrinter
import com.zebra.sdk.printer.discovery.DiscoveredPrinterBluetooth
import com.zebra.sdk.printer.discovery.DiscoveryHandler

interface onResultCallback {
    fun onResult(result: List<Map<String, String>>)
    fun onError(error: String)
}

  open class BluetoothDiscoveryHandle(private val callback: onResultCallback) : DiscoveryHandler {

    private val deviceFoundList: MutableList<Map<String, String>> = mutableListOf()

    override fun foundPrinter(devicePrinter: DiscoveredPrinter?) {
        val device = HashMap<String, String>()
        if (devicePrinter != null) {
            device.put("name", devicePrinter.address)
            device.put("label", (devicePrinter as DiscoveredPrinterBluetooth).friendlyName)
            device.put("connection", devicePrinter.connection.isConnected.toString())
            deviceFoundList.add(device)
        }


    }

    override fun discoveryFinished() {

        callback.onResult(deviceFoundList)
    }

    override fun discoveryError(p0: String?) {
        callback.onError(p0?:"Error")
    }


}