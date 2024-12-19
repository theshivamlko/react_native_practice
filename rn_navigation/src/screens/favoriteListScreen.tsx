

// create a react component


import {CATEGORIES, MEALS} from '../data/dummy-data';
import {FlatList, View, Text, Image, Pressable} from 'react-native';
import React, {useContext, useEffect, useLayoutEffect, useState} from 'react';
import {} from '@react-navigation/native';
import Meal from '../data/models/meal.tsx';
import {FavoritesContext} from '../store/context/favoriteContext.tsx';

export default function FavoriteListScreen({route}: {route: any}) {

const favoriteContext=useContext(FavoritesContext);

  console.log(`FavoriteListScreen favoriteMelaContext ${favoriteContext.ids} `);

  return (
    <View
      style={{
        flexDirection: 'column',
      }}>


      <FlatList data={favoriteContext.ids} renderItem={
        info => {
          return (
            <View>
              <Text>{info.item}</Text>
            </View>
          );
        }
      }></FlatList>
    </View>
  );
}


