import {Text} from "react-native";


export default function SplashScreen(props) {

    setTimeout(function () {
        const pickedNumber = Math.floor(Math.random() * 100) + 1;
        console.log("Picked Number: " + pickedNumber);
        props.onPickNumber(pickedNumber);
    }, 2000)
    return (

        <Text>
            Splash Page
        </Text>


    );
}