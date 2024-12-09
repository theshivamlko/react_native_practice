/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import NativeZebraSDK from './src/specs/NativeZebraSDK';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import HomePage from './src/homePage';
import DeviceListScreen from './src/deviceListScreen.tsx';
// import DeviceListScreen from './src/deviceListScreen.tsx';

// import NativeZebraSDK from './src/specs/NativeZebraSDK';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName={'HomePage'}>
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name={"DeviceListScreen"} component={DeviceListScreen}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

