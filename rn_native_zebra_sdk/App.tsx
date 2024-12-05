/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MyButton from './src/HomePage.tsx';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const [randomNumber, setRandomNumber] = useState(0);

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

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
              setRandomNumber(Math.floor(Math.random() * (1000 - 1 + 1)) + 1);
            }}
          />
          <Text>Read: {randomNumber}</Text>
          <MyButton
            text="Read Shared pref"
            onClick={() => {
              // setRandomNumber(Math.floor(Math.random() * (1000 - 1 + 1)) + 1);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
