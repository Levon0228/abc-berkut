import { useEffect, useState } from 'react'
import { useFavoritesStore } from '../../store/favoritesStore'
import { getPhotosByIds } from '../../api/unsplashApi'
import PhotoGrid from '../../components/PhotoGrid'
import type { Photo } from '../../types/PhotoType'
import styled from 'styled-components'

const Title = styled.h1`
  font-weight: 700;
  font-size: 72px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;display: flex;
  flex-direction: column;
  align-items: center;
 `

function FavoritesPage() {
  const favorites = useFavoritesStore(state => state.favorites)
  const toggleFavorite = useFavoritesStore(state => state.toggleFavorite)
  const isFavorite = useFavoritesStore(state => state.isFavorite)
  const [photos, setPhotos] = useState<Photo[]>([])

  useEffect(() => {
    if (favorites.length === 0) {
      setPhotos([])
      return
    }

    getPhotosByIds(favorites)
      .then(setPhotos)
      .catch(err => console.error('Failed to load favorites', err))
  }, [favorites])

  if (photos.length === 0) {
    return <div style={{ padding: 32 }}>Нет избранных изображений</div>
  }



  return (
    <Container>
      <Title>Избранное</Title>
      <PhotoGrid
        photos={photos}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />
    </Container>
  )
}

export default FavoritesPage
