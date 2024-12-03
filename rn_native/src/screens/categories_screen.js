import {CATEGORIES} from '../data/dummy-data'
import {FlatList, View, Text} from "react-native";
import CategoryGridTile from "../components/category_gridtile";


export default function CategoriesScreen({navigation}) {

    console.log("CategoriesScreen init")
    console.log(`CategoriesScreen navigation ${navigation}`)
    return (
        <View style={{flexDirection: 'column'}}>

            <Text>Categories Screen</Text>

            <FlatList data={CATEGORIES} renderItem={function ({item}) {
                return <CategoryGridTile category={item} onPress={() => {
                    console.log(`CategoryGridTile Click ${item.title}`);
                    navigation.navigate('CategoriesDetailScreen');
                }}/>;
            }} keyExtractor={(item) => item.id}
                      numColumns={2}
            />

            />
        </View>
    );

}