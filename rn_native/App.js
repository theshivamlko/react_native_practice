import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View,SafeAreaView} from 'react-native';
import HomePage from "./src/home_page";

export default function App() {
    return (
            <View style={styles.container}>
                <SafeAreaView>
                <HomePage/>
                </SafeAreaView>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
