import type {TurboModule} from 'react-native';
import {TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  setString(key: string, value: string): void;
  getString(key: string): string | null;
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativeLocalStorage');
