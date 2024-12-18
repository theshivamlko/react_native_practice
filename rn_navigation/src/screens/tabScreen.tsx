// create a page function

import React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import { Icon } from 'react-native-vector-icons/Ionicons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
// import ReleaseAlertOutlined from '@material-symbols/svg-400/outlined/release_alert.svg'

const BottomTabNavigator = createBottomTabNavigator();

export function TabScreen() {
  return (
    <BottomTabNavigator.Navigator screenOptions={{
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    }}>
      <BottomTabNavigator.Screen
        name="PageA"
        component={PageA}
        options={{
          tabBarIcon: ({color,size}) => (
            <View
              style={{
                borderRadius: 50,
                padding: 10,
                backgroundColor: 'red',
              }}></View>
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="PageB"
        component={PageB}
        options={{
          tabBarIcon: () => (
            <View
              style={{
                borderRadius: 50,
                padding: 10,
                backgroundColor: 'blue',
              }}></View>
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="PageC"
        component={PageC}
        options={{

          tabBarIcon: () => (
            <View
              style={{
                borderRadius: 50,
                padding: 10,
                backgroundColor: 'green',
              }}></View>
          ),
        }}
      />
    </BottomTabNavigator.Navigator>
  );
}

export function PageA() {
  return (
    <View>
      <Text>Page A</Text>
    </View>
  );
}

export function PageB() {
  return (
    <View>
      <Text>Page B</Text>
    </View>
  );
}

export function PageC() {
  return (
    <View>
      <Text>Page C</Text>
    </View>
  );
}
