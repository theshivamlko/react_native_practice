import {Pressable, StyleSheet, Text, TextInput, View,} from "react-native";
import {useState} from "react";

export default function GoalInput(props) {
    console.log(`GoalInput(${props})`);
    const [enteredGoal, setEnteredGoal] = useState("");

    function goalInputHandler(input) {
        console.log(`Input: ${input}`);
        setEnteredGoal(input);
    }

    function handleSubmit() {
        console.log(`Goal: ${enteredGoal}`);
        props.onSubmit(enteredGoal);
        setEnteredGoal("");

    }

    return (
        <View style={styles.inputContainer}>

            <TextInput
                placeholder="Enter Goal"
                value={enteredGoal}
                style={{
                    borderWidth: 1,
                    borderColor: "grey",
                    borderRadius: 5,
                    height: 50,
                    width: "60%",
                }}
                onChangeText={(input) => goalInputHandler(input)}
            />


            <View
                style={{
                    height: 40,
                    borderRadius: 20,
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
                    onPress={() => {
                        console.log(`Goal: ${enteredGoal}`);
                        props.onSubmit(enteredGoal);
                        setEnteredGoal("");
                    }}
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
