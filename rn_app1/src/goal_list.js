import {FlatList, Image, Modal, Pressable, StyleSheet, Text, View} from "react-native";

import {useState} from "react";
import GoalItem from "./components/goal_item";
import GoalInput from "./components/goal_input";

export default function GoalListing(props) {
    const [getGoalsList, setGoalsList] = useState([]);
    const [isModelVisible, setModelVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);

    function addGoalHandler(enteredGoalText) {
        console.log(`Goal: ${enteredGoalText} ${getGoalsList.length}`);
        setGoalsList((currentCourseGoals) => [
            ...currentCourseGoals,
            enteredGoalText,
        ]);
    }

    function showModel() {
        setModelVisible(true);
    }

    function hideModel() {
        setModelVisible(false);
        setCurrentIndex(null);
    }

    console.log(`Current Index: ${currentIndex}`);
    var text1 = "0";
    if (props.userNumber != null) {
        text1 = props.userNumber;
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
                    Number from Splash Screen {text1}
                </Text>

                <GoalInput onSubmit={addGoalHandler}/>
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
                windowSize={40}
                renderItem={(item) => {
                    return (
                        <GoalItem
                            itemData={item}
                            onDelete={(index) => {
                                console.log(`Delete: ${index}`);
                                setCurrentIndex(index);
                                showModel();
                            }}
                        />
                    );
                }}

                // Can be used to set key for every item in the list
                // keyExtractor={(item, index) => `${item}${index}`}
            />
            <View
                style={{
                    height: "20%",
                }}>

                <Modal presentationStyle="pageSheet" visible={isModelVisible} animationType="slide">

                    <View style={{
                        alignItems: "center",
                        justifyContent: "center",
                    }}>

                        <Image
                            source={require("../assets/images/tick_mark.jpg")}

                            style={{
                                padding: 50,
                                height: 60,
                                width: 60,

                            }}/>
                        <Image
                            source={{
                                uri: "https://t4.ftcdn.net/jpg/00/34/92/71/360_F_34927102_Gn5vKa4sAoIaGqsZSir9WtfrFEWawrq2.jpg",
                                cache: 'force-cache'
                            }}

                            style={{
                                padding: 50,
                                height: 60,
                                width: 60,

                            }}/>

                        <Text style={{
                            fontSize: 20,
                            padding: 10,
                        }}>Are you sure?</Text>

                        <View style={{
                            width: "100%",
                            flexDirection: "row",
                            justifyContent: "space-around",
                        }}>

                            <Pressable onPress={() => {
                                setGoalsList((currentCourseGoals) => {
                                    return currentCourseGoals.filter((goal, goalIndex) => {
                                        return goalIndex !== currentIndex;
                                    });
                                });
                                hideModel();
                            }}>
                                <Text style={{
                                    fontSize: 20,
                                    padding: 10,
                                }}>Yes</Text>
                            </Pressable>
                            <Pressable onPress={hideModel}>
                                <Text style={{
                                    fontSize: 20,
                                    padding: 10,
                                }}>NO</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
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
