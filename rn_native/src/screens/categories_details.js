import {CATEGORIES} from '../data/dummy-data'
import {FlatList, View, Text} from "react-native";


export default function CategoriesDetailScreen({category,navigation}) {

    console.log("CategoriesScreen init")
    return (
        <View style={{flexDirection: 'column'}}>

            <Text>Categories Details</Text>

            <Text style={{
                padding: 8
            }}>{category.title}</Text>


        </View>
    );

}