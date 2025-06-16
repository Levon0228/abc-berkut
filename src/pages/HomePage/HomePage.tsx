import { useEffect, useState } from 'react'
import PhotoGrid from '../../components/PhotoGrid'
import type { Photo } from '../../types/PhotoType'
import { useFavoritesStore } from '../../store/favoritesStore'
import unsplash from '../../api/unsplashApi'
import { Container, Cover, SearchInput } from './HomePage.styled'


const HomePage = () => {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [query, setQuery] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite)
  const isFavorite = useFavoritesStore((state) => state.isFavorite)

  useEffect(() => {
    const delay = setTimeout(() => {
      setSearchTerm(query.trim())
    }, 500)
    return () => clearTimeout(delay)
  }, [query])

  useEffect(() => {
    if (!searchTerm) {
      unsplash
        .get('/photos/random', { params: { count: 9 } })
        .then((res) => setPhotos(res.data))
        .catch((err) => console.error('Failed to load random photos', err))
    } else {
      unsplash
        .get('/search/photos', {
          params: { query: searchTerm, per_page: 12 },
        })
        .then((res) => setPhotos(res.data.results || []))
        .catch((err) => console.error('Search failed', err))
    }
  }, [searchTerm])

  return (
    <Container>
      <Cover >
        <SearchInput
          type="text"
          placeholder="Поиск..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

      </Cover >
      <PhotoGrid
        photos={photos}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
        withDescription={false}
      />
    </Container>
  )
}

export default HomePage
