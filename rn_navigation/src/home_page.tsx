import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

/*const PlatformComponent = Platform.select({
    ios: () => require('./platform/platform_component_ios').default,
    android: () => require('./platform/platform_component_android').default,
    default: () => require('./platform/platform_component').default,
})();*/
import CategoriesScreen from './screens/categories_screen';

// import SharedPreferenceRN from './android/native_shared_preference';

export default function HomePage() {
  const navigation = useNavigation();
  console.log('HomePage init');

  const dimen = useWindowDimensions();

  const deviceHeight = dimen.height;
  const os = Platform.OS;
  const version = Platform.Version;

  console.log(`deviceHeight ${deviceHeight}`);
  return (
    <View
      style={{
        alignSelf: 'stretch',
        flexDirection: 'column' /* backgroundColor: 'red'*/,
        backgroundColor: 'grey',
      }}>
      <View style={{alignSelf: 'stretch', flexDirection: 'column'}}>
        <ScrollView>
          <KeyboardAvoidingView
            style={{
              flex: 1,
            }}
            behavior="position">
            <Text>Hello</Text>
            <View style={styles.container}>
              <Text style={{fontSize: 20}}>Platform</Text>

              <Text>Dimensions</Text>
              <Text>OS: {os}</Text>
              <Text>Version: {version}</Text>
              <Text>Version: {Platform.select({android: 1, ios: 2})}</Text>
              {/*<PlatformComponent/>*/}

              <View style={{flexDirection: 'row'}}>
                <Pressable
                  onPress={() => {
                    navigation.navigate('CategoriesScreen');
                  }}>
                  <View style={{backgroundColor: 'red', flex: 1}}>
                    <Text>Open CategoryScreen</Text>
                  </View>
                </Pressable>
                <View style={{backgroundColor: 'brown', flex: 1}}>
                  <Pressable
                    onPress={() => {
                      // const name = SharedPreferenceRN?.getItem('name');
                      // console.log(`SharedPreferenceRN name ${name} `)
                    }}>
                    <Text>Read SharedPred</Text>
                  </Pressable>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      backgroundColor: 'blue',
                      width: 100,
                      height: deviceHeight * 0.2,
                    }}>
                    <Pressable
                      onPress={() => {
                        // SharedPreferenceRN?.setItem('name', "Shivam");
                        // console.log(`SharedPreferenceRN setItem `)
                      }}>
                      <Text>Write SharedPred</Text>
                    </Pressable>
                  </View>
                  <View
                    style={{
                      backgroundColor: 'yellow',
                      width: 100,
                      height: deviceHeight * 0.1,
                    }}>
                    <Pressable onPress={() => {}}>
                      <Text>Write SharedPred</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
              <View
                style={{
                  height: 40,
                  width: '100%',
                  borderColor: '#000',
                  borderWidth: 1,
                  flexDirection: 'column',
                }}>
                <TextInput inputMode={'text'} disableFullscreenUI={true} />
              </View>
              <View
                style={{
                  height: 40,
                  width: '100%',
                  borderColor: '#000',
                  borderWidth: 1,
                  flexDirection: 'column',
                }}>
                <TextInput inputMode={'text'} disableFullscreenUI={true} />
              </View>
              <View
                style={{
                  height: 40,
                  width: '100%',
                  borderColor: '#000',
                  borderWidth: 1,
                  flexDirection: 'column',
                }}>
                <TextInput inputMode={'text'} disableFullscreenUI={true} />
              </View>
              <View
                style={{
                  height: 40,
                  width: '100%',
                  borderColor: '#000',
                  borderWidth: 1,
                  flexDirection: 'column',
                }}>
                <TextInput inputMode={'text'} disableFullscreenUI={true} />
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>

      <ScrollView>
        <View style={{alignSelf: 'stretch', flexDirection: 'column'}}>
          <Text>Navigation</Text>
          <CategoriesScreen />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    width: '100%',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
});
