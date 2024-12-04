import {CATEGORIES} from '../data/dummy-data'
import {FlatList, View, Text,Pressable} from "react-native";
import {useNavigation} from '@react-navigation/native';
import CategoryGridTile from "../components/category_gridtile";


export default function CategoriesScreen( ) {

    const navigation = useNavigation();
    console.log("CategoriesScreen init")
    console.log(`CategoriesScreen navigation  `)
    return (
        <View style={{flexDirection: 'column'}}>

            <Text>Categories Screen </Text>
            <Pressable onPress={() => {
                navigation.goBack()
            }}>
            <Text style={{padding:8}}>Go Back </Text>
            </Pressable>

            <FlatList data={CATEGORIES} renderItem={({item}) => {
                return <CategoryGridTile category={item} onPress={() => {
                    console.log(`CategoryGridTile Click ${item.title}`);
                   navigation.navigate('CategoriesDetailScreen',{category:item});
                }}/>;
            }}
                      keyExtractor={(item) => item.id}
                      numColumns={2}
            />


        </View>
    );

}
