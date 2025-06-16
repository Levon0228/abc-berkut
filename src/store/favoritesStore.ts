import { create } from 'zustand'

interface FavoritesState {
  favorites: string[]
  toggleFavorite: (id: string) => void
  isFavorite: (id: string) => boolean
}

const FAVORITES_STORAGE_KEY = 'abc-berkut-favorites'

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  favorites: JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY) ?? '[]'),

  toggleFavorite: (id: string) => {
    const { favorites } = get()
    let newFavorites: string[]

    if (favorites.includes(id)) {
      newFavorites = favorites.filter(fid => fid !== id)
    } else {
      newFavorites = [...favorites, id]
    }

    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(newFavorites))
    set({ favorites: newFavorites })
  },

  isFavorite: (id: string) => {
    return get().favorites.includes(id)
  },
}))
