/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import MyButton from './src/HomePage';
import NativeZebraSDK from './src/specs/NativeZebraSDK';
// import NativeLocalStorage from './src/specs/NativeLocalStorage';
// import NativeZebraSDK from './src/specs/NativeZebraSDK';





function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [randomNumber,setRandomNumber] = useState('')

  React.useEffect(() => {
    // console.log('Module Name:', NativeLocalStorage);
   // const storedValue = NativeLocalStorage?.getString('myKey');
  }, []);

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={Colors.red}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
            backgroundColor: Colors.white,
            padding: 16,
          }}>
          <MyButton
            text="Write Randome number to Shared pref"
            onClick={() => {
              const n:number=Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
              console.log("n",n);
              setRandomNumber("1")
             // NativeLocalStorage.setString('key',n.toString());
            }}
          />
          <Text>Read: {randomNumber}</Text>
          <MyButton
            text="Read Shared pref"
            onClick={() => {
          // const n:string|null=  NativeLocalStorage.getString('key');
          //      setRandomNumber(`${n}`);
            }}
          />

          <MyButton
            text="Scan devices"
            onClick={() => {
              console.log("Scan devices start");
              NativeZebraSDK.getAvailableDevices().then((devices) => {
                console.log('devices', devices);
              });
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}



export default App;
