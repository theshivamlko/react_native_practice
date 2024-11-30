import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import InputField from "./src/input_field";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Open up App.js to start working on your app!</Text>
        <InputField />
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3", // light grey color
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
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
