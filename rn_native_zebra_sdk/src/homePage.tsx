// add page
import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MyButton from './myButton.tsx';
import NativeLocalStorage from './specs/NativeLocalStorage.ts';
import {useNavigation} from '@react-navigation/native';

export default function HomePage() {
  const [randomNumber, setRandomNumber] = useState('');
  const navigation= useNavigation();


  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View
        style={{
          backgroundColor: 'green',
          padding: 16,
        }}>
        <MyButton
          text="Write Randome number to Shared pref"
          onClick={() => {
            const n: number = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
            console.log('n', n);
            setRandomNumber(`${n}`);
            NativeLocalStorage.setString('key', n.toString());
          }}
        />
        <Text>Read: {randomNumber}</Text>
        <MyButton
          text="Read Shared pref"
          onClick={() => {
            const n: string | null = NativeLocalStorage.getString('key');
            setRandomNumber(`${n}`);
          }}
        />

        <MyButton
          text="Device List Screen"
          onClick={() => {
            navigation.navigate("DeviceListScreen")
            /*  NativeZebraSDK.getAvailableDevices().then((devices) => {
                console.log('devices', devices);
              });*/
          }}
        />
      </View>
    </ScrollView>
  );
}
