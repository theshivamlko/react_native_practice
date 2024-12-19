import {CATEGORIES, MEALS} from '../data/dummy-data';
import {FlatList, View, Text, Image, Pressable} from 'react-native';
import React, {useContext, useEffect, useLayoutEffect, useState} from 'react';
import {} from '@react-navigation/native';
import Meal from '../data/models/meal.tsx';
import {FavoritesContext} from '../store/context/favoriteContext.tsx';

export default function CategoriesDetailScreen({route}: {route: any}) {
  const [mealsList, setMealsList] = useState<Meal[]>([]);
  const routesInfo = route;
  console.log(`CategoriesScreen init ${route.params.category.id} `);
  console.log(route.params);

  const favoriteMelaContext=useContext(FavoritesContext);
  const isFavorite=favoriteMelaContext.ids.includes(route.params.category.id);
  console.log(`CategoriesScreen favoriteMelaContext ${favoriteMelaContext.ids} `);

  useEffect(() => {
    const list = MEALS.filter(meal => {
      return meal.categoryIds.indexOf(route.params.category.id) >= 0;
    });
    setMealsList(list);

    console.log(`mealsList ${mealsList.length}`);
  }, []);

  useLayoutEffect(() => {
    // run to update something Before component is mounted

    // navigation.setOptions({}) , can set option for a next page after navigation happens

  }, []);


  return (
    <View
      style={{
        flexDirection: 'column',
        backgroundColor: routesInfo.params.category.color,
      }}>
      <Text>Categories Details</Text>

      <Text
        style={{
          padding: 8,
        }}>
        {route.params.category.title}
      </Text>

      <FlatList
        data={mealsList}
        renderItem={({item}: {item: Meal}) => {
          console.log("Meal item.imageUrl", item.imageUrl);
          return (
            <View style={{flexDirection: 'column'}}>
              <Image source={{uri: item.imageUrl}} style={{height:100,width:200}} />
              <Text
                style={{
                  padding: 8,
                }}>
                {item.title}
              </Text>

              <Pressable onPress={()=>{
                if(isFavorite) {
                favoriteMelaContext.removeFavorite(route.params.category.id);
                }else {
                  favoriteMelaContext.addFavorite(route.params.category.id);
                }
              }}>

            <Text style={{color:isFavorite?'yellow':'blue'}}>Favorite</Text>
              </Pressable>

            </View>
          );
        }}
      />
    </View>
  );
}
