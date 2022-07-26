import { useEffect, useState } from 'react'
const LOCAL_FAV_LIST = 'local_fav_list'
const MAX_FAV_NUM = 100

const getLocalFavList = () => {
  const val = localStorage.getItem(LOCAL_FAV_LIST)
  if (val) {
    return val.split(',').map(Number)
  }
  return []
}

const setLocalFavList = (favList: number[]) => {
  localStorage.setItem(LOCAL_FAV_LIST, favList.join())
}

export default function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([])

  const addFavorite = (id: number) => {
    const index = favorites.findIndex((f) => f === id)
    if (index === -1) {
      setFavorites((list) => [id, ...list])
    } else {
      setFavorites((list) =>
        [id].concat(list.slice(0, index).concat(index + 1, MAX_FAV_NUM))
      )
    }
  }

  const removeFavorite = (id: number) => {
    const index = favorites.findIndex((f) => f === id)
    if (index !== -1) {
      setFavorites((list) =>
        list.slice(0, index).concat(list.slice(index + 1, MAX_FAV_NUM))
      )
    }
  }

  useEffect(() => {
    setFavorites(getLocalFavList())
  }, [])

  useEffect(() => {
    setLocalFavList(favorites)
  }, [favorites])

  return {
    favorites,
    addFavorite,
    removeFavorite,
  }
}
