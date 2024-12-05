import {CATEGORIES, MEALS} from '../data/dummy-data';
import {FlatList, View, Text, Image} from 'react-native';
import {useEffect, useLayoutEffect, useState} from 'react';
import {} from '@react-navigation/native';
import Meal from '../data/models/meal.tsx';

export default function CategoriesDetailScreen({route}: {route: any}) {
  const [mealsList, setMealsList] = useState<Meal[]>([]);
  const routesInfo = route;
  console.log(`CategoriesScreen init ${route.params} `);
  console.log(route.params);

  useEffect(() => {
    const list = MEALS.filter(meal => {
      return meal.categoryIds.indexOf(route.params.category.id) >= 0;
    });
    setMealsList(list);

    console.log(`mealsList ${mealsList.length}`);
  }, []);

  useLayoutEffect(() => {
    // run to update something Before component is mounted

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
            </View>
          );
        }}
      />
    </View>
  );
}
