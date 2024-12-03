import {CATEGORIES} from '../data/dummy-data'
import {FlatList, View,Text} from "react-native";
import CategoryGridTile from "../components/category_gridtile";


export default function CategoriesScreen() {

    return (
        <View style={{flexDirection: 'column'}}>

            <Text>Categories Screen</Text>

            <FlatList data={CATEGORIES} renderItem={function ({item}) {
                return <CategoryGridTile category={item}/>;
            }} keyExtractor={(item) => item.id}
            numColumns={2}
            />

            />
        </View>
    );

}