import {StatusBar} from 'expo-status-bar';
import {
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Dimensions,
    useWindowDimensions,
    TextInput,
    KeyboardAvoidingView, ScrollView,
} from 'react-native';

export default function HomePage() {


    const dimen = useWindowDimensions();

    const deviceHeight = dimen.height;
    console.log(`deviceHeight ${deviceHeight}`);
    return (
        <ScrollView style={{
            flex: 1
        }}>
        <KeyboardAvoidingView style={{
            flex: 1
        }} behavior={"position"}>


                <View style={styles.container} >
                    <StatusBar style="dark"/>
                    <Text style={{fontSize: 20}}>Open up App.js to start working on your app!</Text>
                    <Text>Dimensions</Text>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{backgroundColor: 'red', flex: 1}}/>
                        <View style={{backgroundColor: 'brown', flex: 1}}/>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{backgroundColor: 'blue', width: 100, height: deviceHeight * 0.10}}/>
                            <View style={{backgroundColor: 'yellow', width: 20, height: deviceHeight * 0.14}}/>
                        </View>
                    </View>
                    <View style={{height: 40}}></View>
                    <View style={{height: 40, width: '100%', borderColor: '#000', borderWidth: 1 ,flexDirection:'column'}}>
                        <TextInput inputMode={'text'} disableFullscreenUI={true} />
                    </View>
                    <View style={{height: 40, width: '100%', borderColor: '#000', borderWidth: 1 ,flexDirection:'column'}}>
                        <TextInput inputMode={'text'} disableFullscreenUI={true} />
                    </View>
                   

                </View>
        </KeyboardAvoidingView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
});
