import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import WelcomeScreen from './src/screens/welcome_screen.tsx';
import UserScreen from './src/screens/user_screen.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './src/home_page.tsx';
import CategoriesScreen from './src/screens/categories_screen.tsx';
import CategoriesDetailScreen from './src/screens/categories_details.tsx';
import * as React from 'react';

const Drawer = createDrawerNavigator();
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Welcome">
        <Drawer.Screen name="Welcome" component={WelcomeScreen} />
        <Drawer.Screen name="User" component={UserScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// const Stack = createNativeStackNavigator();
//
// function RootStack() {
//   return (
//     <Stack.Navigator initialRouteName={'Home'}>
//       <Stack.Screen
//         name="Home"
//         component={HomePage}
//         // options={(router,navigation)=>{}}
//         options={{
//           title: 'Home',
//           headerStyle: {
//             backgroundColor: 'pink',
//           },
//           contentStyle: {
//             backgroundColor: 'white',
//           },
//         }}
//       />
//       <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
//       <Stack.Screen
//         name="CategoriesDetailScreen"
//         component={CategoriesDetailScreen}
//       />
//     </Stack.Navigator>
//   );
// }
//
// function App() {
//   return (
//     <NavigationContainer>
//       <RootStack />
//     </NavigationContainer>
//   );
// }

export default App;
