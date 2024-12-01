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
  console.log(`FlatList Item: ${itemParam.itemData.item} ${itemParam.itemData.index}`);

  return (
    <View key={keyExtractor}>
      <Text>{itemParam.itemData.item}</Text>
    </View>
  );
}

export default GoalItem;
