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
import GoalItem from "./components/goal_item";
import GoalInput from "./components/goal_input";

export default function GoalListing() {
  const [getGoalsList, setGoalsList] = useState([]);

  function addGoalHandler(enteredGoalText) {
    console.log(`Goal: ${enteredGoalText} ${getGoalsList.length}`);
    setGoalsList((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
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

        <GoalInput onSubmit={addGoalHandler} />
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
          return (
            <GoalItem
              itemData={item}
              onDelete={(index) => {
                console.log(`Delete: ${index}`);
                setGoalsList((currentCourseGoals) => {
                  return currentCourseGoals.filter((goal, goalIndex) => {
                    return goalIndex !== index;
                  });
                });
              }}
            />
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
