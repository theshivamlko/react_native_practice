import {StyleSheet, Text, View,} from "react-native";
import {useState} from "react";

import GoalListing from "./src/goal_list";
import SplashScreen from "./src/screens/splash_screen";

export default function App() {

    const [userNumber, setUserNumber] = useState(null);

    function pickNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
        console.log("pickNumberHandler " + pickedNumber);
    }

    let screen = <SplashScreen onPickNumber={pickNumberHandler}/>;
    if (userNumber != null) {
        screen = <GoalListing userNumber={userNumber}/>
    }

    return (
        <View style={styles.container}>

            <Text>Open up App.js page</Text>
            {screen}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff", // light grey color
        alignItems: "center",
        justifyContent: "center",
    },
    textStyle: {
        color: "red",
        fontSize: 20,
        fontWeight: "bold",
        margin: 10,
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
});
