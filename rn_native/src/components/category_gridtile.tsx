import {CATEGORIES} from '../data/dummy-data'
import {FlatList, Pressable, View, Text} from "react-native";


export default function CategoryGridTile({category,onPress}) {
    console.log(`CategoryGridTile ${category} ${category.title}`);

    return (
        <View style={{
            flexDirection: 'column',
            flex: 1,
            height: 50,
            width: 120,
            margin: 2,
            justifyContent: "center",
            alignItems: "center",
            shadowColor:'grey',
            backgroundColor: category.color,
            elevation:2

        }}>
            <Pressable style={{padding: 4, alignItems: 'center'}} onPress={onPress}>
                <Text style={{
                    fontWeight: 'bold',

                }}>{category.title}</Text>
            </Pressable>
        </View>
    );
}