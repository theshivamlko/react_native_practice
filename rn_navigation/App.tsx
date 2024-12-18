import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import WelcomeScreen from './src/screens/welcome_screen.tsx';
import UserScreen from './src/screens/user_screen.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './src/home_page.tsx';
import CategoriesScreen from './src/screens/categories_screen.tsx';
import CategoriesDetailScreen from './src/screens/categories_details.tsx';
// import * as React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import {TabScreen} from './src/screens/tabScreen.tsx';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export  function homePage(){
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen
        name="Home"
        component={HomePage}
        // options={(router,navigation)=>{}}
        options={{
          title: 'Home',
          headerShown:false,
          headerStyle: {
            backgroundColor: 'pink',
          },
          contentStyle: {
            backgroundColor: 'white',
          },
        }}
      />
      <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} options={{
        headerShown:false,

      }} />
      <Stack.Screen
        name="CategoriesDetailScreen"
        component={CategoriesDetailScreen}
        options={{
          headerShown:false,
        }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomePage"
        screenOptions={{
          headerStyle: {backgroundColor: 'purple'},
          drawerContentStyle: {backgroundColor: 'lightblue'},
        }}>
        <Drawer.Screen
          name="HomePage"
          component={homePage}
          options={{
            headerStyle: {backgroundColor: 'purple'},
            headerTintColor: 'white',
            drawerLabel: 'HomePage',
            drawerActiveBackgroundColor: 'lightgreen',
          }}
        />
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerStyle: {backgroundColor: 'purple'},
            headerTintColor: 'white',
            drawerLabel: 'Home',
            drawerActiveBackgroundColor: 'lightgreen',
          }}
        />

        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            drawerLabel: 'Profile',
            headerStyle: {backgroundColor: 'green'},
            headerTintColor: 'white',
            headerShown: false,
          }}
        />

        <Drawer.Screen
          name="Tabs"
          component={TabScreen}
          options={{
            title: 'Tabs Example',
            drawerLabel: 'TabScreen',
            headerStyle: {backgroundColor: 'green'},
            headerTintColor: 'white',
          }}
        />
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
