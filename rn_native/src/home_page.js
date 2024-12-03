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
    Platform
} from 'react-native';

export default function HomePage() {


    const dimen = useWindowDimensions();

    const deviceHeight = dimen.height;
    const os = Platform.OS;
    const version = Platform.Version;

    console.log(`deviceHeight ${deviceHeight}`);
    return (

        <View style={{alignSelf: 'stretch', backgroundColor: 'red'}}>
            <ScrollView>
                <KeyboardAvoidingView style={{
                    flex: 1,
                    behavior :"position"
                }}>

                    <Text>Hello</Text>
                    <View style={styles.container}>

                        <StatusBar style="dark"/>
                        <Text style={{fontSize: 20}}>Platform</Text>

                        <Text>Dimensions</Text>
                        <Text>OS: {os}</Text>
                        <Text>Version: {version}</Text>
                        <Text>Version: {Platform.select({android: 1, ios: 2})}</Text>

                        <View style={{flexDirection: 'row'}}>
                            <View style={{backgroundColor: 'red', flex: 1}}/>
                            <View style={{backgroundColor: 'brown', flex: 1}}/>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{backgroundColor: 'blue', width: 100, height: deviceHeight * 0.10}}/>
                                <View style={{backgroundColor: 'yellow', width: 20, height: deviceHeight * 0.14}}/>
                            </View>
                        </View>
                        <View style={{
                            height: 40,
                            width: '100%',
                            borderColor: '#000',
                            borderWidth: 1,
                            flexDirection: 'column'
                        }}>
                            <TextInput inputMode={'text'} disableFullscreenUI={true}/>
                        </View>
                        <View style={{
                            height: 40,
                            width: '100%',
                            borderColor: '#000',
                            borderWidth: 1,
                            flexDirection: 'column'
                        }}>
                            <TextInput inputMode={'text'} disableFullscreenUI={true}/>
                        </View>
                        <View style={{
                            height: 40,
                            width: '100%',
                            borderColor: '#000',
                            borderWidth: 1,
                            flexDirection: 'column'
                        }}>
                            <TextInput inputMode={'text'} disableFullscreenUI={true}/>
                        </View>
                        <View style={{
                            height: 40,
                            width: '100%',
                            borderColor: '#000',
                            borderWidth: 1,
                            flexDirection: 'column'
                        }}>
                            <TextInput inputMode={'text'} disableFullscreenUI={true}/>
                        </View>
                        <View style={{
                            height: 40,
                            width: '100%',
                            borderColor: '#000',
                            borderWidth: 1,
                            flexDirection: 'column'
                        }}>
                            <TextInput inputMode={'text'} disableFullscreenUI={true}/>
                        </View>
                        <View style={{
                            height: 40,
                            width: '100%',
                            borderColor: '#000',
                            borderWidth: 1,
                            flexDirection: 'column'
                        }}>
                            <TextInput inputMode={'text'} disableFullscreenUI={true}/>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>

            {/*<ScrollView style={{*/}
            {/*    flex: 1*/}
            {/*}}>*/}
            {/*    <KeyboardAvoidingView style={{*/}
            {/*        flex: 1*/}
            {/*    }} behavior={"position"}>*/}


            {/*        <View style={styles.container}>*/}
            {/*            <StatusBar style="dark"/>*/}
            {/*            <Text style={{fontSize: 20}}>Platform</Text>*/}
            {/*            <Text>Dimensions</Text>*/}

            {/*            <View style={{flexDirection: 'row'}}>*/}
            {/*                <View style={{backgroundColor: 'red', flex: 1}}/>*/}
            {/*                <View style={{backgroundColor: 'brown', flex: 1}}/>*/}
            {/*                <View style={{flexDirection: 'row'}}>*/}
            {/*                    <View style={{backgroundColor: 'blue', width: 100, height: deviceHeight * 0.10}}/>*/}
            {/*                    <View style={{backgroundColor: 'yellow', width: 20, height: deviceHeight * 0.14}}/>*/}
            {/*                </View>*/}
            {/*            </View>*/}
            {/*            <View style={{height: 4000}}></View>*/}
            {/*            <View style={{*/}
            {/*                height: 40,*/}
            {/*                width: '100%',*/}
            {/*                borderColor: '#000',*/}
            {/*                borderWidth: 1,*/}
            {/*                flexDirection: 'column'*/}
            {/*            }}>*/}
            {/*                <TextInput inputMode={'text'} disableFullscreenUI={true}/>*/}
            {/*            </View>*/}
            {/*            <View style={{*/}
            {/*                height: 40,*/}
            {/*                width: '100%',*/}
            {/*                borderColor: '#000',*/}
            {/*                borderWidth: 1,*/}
            {/*                flexDirection: 'column'*/}
            {/*            }}>*/}
            {/*                <TextInput inputMode={'text'} disableFullscreenUI={true}/>*/}
            {/*            </View>*/}


            {/*        </View>*/}
            {/*    </KeyboardAvoidingView>*/}
            {/*</ScrollView>*/}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        width: "100%",
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
});
