import {StatusBar} from 'expo-status-bar';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default function HomePage() {
    return (
        <View style={styles.container}>
            <StatusBar style="dark"/>
            <Text style={{fontSize: 20}}>Open up App.js to start working on your app!</Text>
            <Text>Dimensions</Text>

            <View style={{flexDirection: 'row'}}>
                <View style={{backgroundColor: 'red', flex: 1}}/>
                <View style={{backgroundColor: 'brown', flex: 1}}/>
                <View style={{flexDirection: 'row', flex: 0}}>
                    <View style={{backgroundColor: 'blue', width: 100, height: 100}}/>
                    <View style={{backgroundColor: 'yellow', width: 20, height: 100}}/>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
});
