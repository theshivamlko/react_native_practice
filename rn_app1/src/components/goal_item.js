import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  FlatList,
} from "react-native";

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
      <Pressable android_ripple={{color:'purple'}}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? 'yellow' : 'red',
          padding: 10,
        },
      ]}
      >
        <Text style={{color:'#fff'}}>{itemParam.itemData.item}</Text>
      </Pressable>
      <Pressable onPress={() => itemParam.onDelete(itemParam.itemData.index)}>
        <View style={{ padding: 10 }}>
          <Text>Delete</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default GoalItem;
