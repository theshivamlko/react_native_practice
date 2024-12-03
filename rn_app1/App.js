import {SafeAreaView, StyleSheet, View} from "react-native";
import {useEffect, useState} from "react";

import GoalListing from "./src/goal_list";
import SplashScreen from "./src/screens/splash_screen";
import {useFonts} from "expo-font";
import * as NativeSplashScreen from "expo-splash-screen";

export default function App() {
    console.log(`App()`);

    const [userNumber, setUserNumber] = useState(null);
    console.log(`NativeSplashScreen show`);
    NativeSplashScreen.preventAutoHideAsync();

    function pickNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
        console.log("pickNumberHandler " + pickedNumber);
    }

    let screen = <SplashScreen onPickNumber={pickNumberHandler}/>;
    if (userNumber != null) {
        screen = <GoalListing userNumber={userNumber}/>
    }

    console.log("NativeSplashScreen Font loading start ");
    const [isFontsLoaded] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    })
    console.log(`NativeSplashScreen Font loading end ${isFontsLoaded}`);

    useEffect(() => {
        console.log(`NativeSplashScreen useEffect ${isFontsLoaded}`);
        if (!isFontsLoaded) {
            console.log(`NativeSplashScreen hide`);
            NativeSplashScreen.hide();

        }
    }, [isFontsLoaded]);


    console.log(`NativeSplashScreen return`);

    return (

        <View style={styles.container}>

            <SafeAreaView style={{
                flex: 1, paddingBlock: 10,
            }}>

                {screen}
            </SafeAreaView>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: "#fff", // light grey color
        alignItems: "center", justifyContent: "center",
    }, textStyle: {
        color: "red", fontSize: 20, fontWeight: "bold", margin: 10,
    }, inputContainer: {
        flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20,
    },
});
