import {createContext, ReactNode, useState,Provider} from 'react';


export const FavoritesContext = createContext<{
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}>({
  ids: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

export function FavoritesContextProvider(props: {children: ReactNode}) {

  const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);

  function addFavorite(id: string) {

    setFavoriteMealIds((currentIds: string[]) => [...currentIds, id]);
  }

  function removeFavorite(id: string) {

    setFavoriteMealIds((currentIds: string[]) => currentIds.filter((mealId) => mealId !== id));
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite
  };

  return (
    <FavoritesContext.Provider value={value}>
      {props.children}
      </FavoritesContext.Provider>
  );
}
