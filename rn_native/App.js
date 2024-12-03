import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View,SafeAreaView} from 'react-native';
import HomePage from "./src/home_page";

export default function App() {
    return (
            <View style={styles.container}>
                <HomePage/>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'pink',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',

    },
});
