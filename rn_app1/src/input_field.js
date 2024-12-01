import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  FlatList,
} from "react-native";

import { useState } from "react";

export default function GoalListing() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [getGoalsList, setGoalsList] = useState([]);

  function goalInputHandler(input) {
    console.log(`Input: ${input}`);
    setEnteredGoal(input);
  }

  function addGoalHandler() {
    console.log(`Goal: ${enteredGoal} ${getGoalsList.length}`);
    setGoalsList((currentCourseGoals) => [...currentCourseGoals, enteredGoal]);
  }

  return (
    <View
      style={{
        flexDirection: "column",
      }}
    >
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
        }}
      >
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
            onChangeText={(input) => goalInputHandler(input)}
          />

          <View
            style={{
              height: 40,
            }}
          >
            <View
              style={{
                borderRadius: 10,
                backgroundColor: "yellow",
              }}
            >
              <Pressable
                title="Add Goal"
                color="red"
                style={{
                  width: 100,
                  height: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 4,
                  elevation: 3,
                  backgroundColor: "red",
                }}
                onPress={() => addGoalHandler()}
              >
                <Text
                  style={{
                    color: "white",
                  }}
                >
                  Add Goal
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          height: 40,
        }}
      ></View>
      {/* <View>
        {getGoalsList.map((goal, index) => (
          <View>
          <Text key={`${goal}${index}`}>{goal}</Text>
          </View>

        ))}
      </View> */}

      <FlatList
        data={getGoalsList}
        alwaysBounceHorizontal={false}
        initialNumToRender={10}
        maxToRenderPerBatch={10} 
        windowSize={40} // Number of items outside of the visible area to keep rendered


        renderItem={(item) => {
        var keyExtractor=`${item.item}${item.index}`

          console.log(`FlatList Item: ${item.item} ${item.index}`);
          return (
            <View key={keyExtractor}>
              <Text >{item.item}</Text>
            </View>
          );
        }}

        // Can be used to set key for every item in the list
        // keyExtractor={(item, index) => `${item}${index}`}
      />
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
