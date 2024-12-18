import {Button, Text, View} from 'react-native';
import {NavigationProp, useNavigation, useRoute} from '@react-navigation/native';
import {DrawerNavigationProp, DrawerScreenProps, useDrawerProgress} from '@react-navigation/drawer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';


type RootStackParamList = {
  Welcome: undefined;
  User: undefined;
};

type WelcomeScreenNavigationProp = DrawerNavigationProp<RootStackParamList, 'Welcome'>;

export default function WelcomeScreen({ navigation }: { navigation: WelcomeScreenNavigationProp }) {


  return (
    <View>
      <Text>WelcomeScreen</Text>

      <Button title="Toggle Drawer" onPress={() => {
        navigation.toggleDrawer();
      }} />

      <Button title="Open User" onPress={() => {
        navigation.toggleDrawer();
      }} />
    </View>
  );
}
