import {CATEGORIES} from '../data/dummy-data'
import {FlatList, View, Text} from "react-native";
import { } from "@react-navigation/native";
import Category from "../data/models/category";


export default function CategoriesDetailScreen({ route}: {  route:any }   ) {

    const routesInfo = route;
    console.log(`CategoriesScreen init ${route.params} `)
    console.log(route.params)
    return (
        <View style={{flexDirection: 'column',backgroundColor:routesInfo.params.category.color}}>

            <Text>Categories Details</Text>

            <Text style={{
                padding: 8
            }}>{route.params.category.title}</Text>


        </View>
    );

}
