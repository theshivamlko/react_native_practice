import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import HomePage from "./src/home_page";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CategoriesScreen from "./src/screens/categories_screen";
import CategoriesDetailScreen from "./src/screens/categories_details";


const NavStack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="dark"/>
            <NavigationContainer>
                <NavStack.Navigator initialRouteName={"HomePage"}>
                    <NavStack.Screen name="HomePage" component={HomePage}/>
                    <NavStack.Screen name="CategoryScreen" component={CategoriesScreen}/>
                    <NavStack.Screen name="CategoryDetails" component={CategoriesDetailScreen}/>
                </NavStack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'grey',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',

    },
});
