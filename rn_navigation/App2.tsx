import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './src/home_page.tsx';
import CategoriesScreen from './src/screens/categories_screen.tsx';
import CategoriesDetailScreen from './src/screens/categories_details.tsx';



const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen
        name="Home"
        component={HomePage}
        // options={(router,navigation)=>{}}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: 'pink',
          },
          contentStyle: {
            backgroundColor: 'white',
          },
        }}
      />
      <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
      <Stack.Screen
        name="CategoriesDetailScreen"
        component={CategoriesDetailScreen}
      />
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
