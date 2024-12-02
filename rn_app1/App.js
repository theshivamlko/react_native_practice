import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import GoalListing from "./src/goal_list";

export default function App() {
  return (
    <View style={styles.container}>
      
        <Text>Open up App.js to start working on your app!</Text>
        <GoalListing />
    
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
