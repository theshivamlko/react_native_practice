import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function InputField() {
  return (
    <View>
      <Text style={styles.textStyle}>
        Open up App.js to start working on your app!
      </Text>

      <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter Goal"
            style={{
              borderWidth: 1,
              borderColor: "grey",
              borderRadius: 5,
              width: "60%",
            }}
          />

          <View style={{
            height:40
          }}>
            <Button
              title="Add Goal"
              style={{
                padding: 0,
                margin: 0,
              }}
              onPress={() => alert("Button pressed")}
            ></Button>
          </View>
        </View>
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
