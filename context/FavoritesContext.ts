import React from 'react'

interface FavoritesProps {
  favorites: number[]
  addFavorite: (id: number) => void
  removeFavorite: (id: number) => void
}

const FavoritesContext = React.createContext<FavoritesProps>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
})


export default FavoritesContext