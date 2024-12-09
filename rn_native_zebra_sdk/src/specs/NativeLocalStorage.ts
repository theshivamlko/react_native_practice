import type {TurboModule} from 'react-native';
import {TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  getDeviceList(): string[] | null;
  connectToDevice(deviceId: string): string | null;
  startScan(): void;
  stopScan(): void;
  listenToRFID(onListen:(data:string)=>void):void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativeLocalStorage');
