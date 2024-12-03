import {Pressable, Text, View,} from "react-native";
import Colors from "../utils/app_theme";
import {MaterialIcons} from "@expo/vector-icons";

function GoalItem(itemParam) {
    var keyExtractor = `${itemParam.itemData.item}${itemParam.itemData.index}`;
    console.log(
        `FlatList Item: ${itemParam.itemData.item} ${itemParam.itemData.index}`
    );


    return (
        <View
            key={keyExtractor}
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
            }}
        >
            <Pressable android_ripple={{color: Colors.itemBackgroundColor}}
                       style={(pressed) => [
                           {
                               backgroundColor: pressed ? Colors.primary600 : Colors.primary500,
                               padding: 10,
                           },
                       ]}
            >
                <Text style={{color: '#fff', fontFamily: 'open-sans'}}>{itemParam.itemData.item}</Text>
            </Pressable>
            <Pressable onPress={() => itemParam.onDelete(itemParam.itemData.index)}>
                <View style={{padding: 10, flexDirection: 'row'}}>
                    <MaterialIcons name="delete" size={24} color="grey"></MaterialIcons>
                    <Text style={{fontFamily: 'open-sans-bold'}}>Delete</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default GoalItem;
