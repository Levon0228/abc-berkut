import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import unsplash from '../../api/unsplashApi'
import { useFavoritesStore } from '../../store/favoritesStore'
import PhotoDetailCard from '../../components/PhotoDetailedCard'
import { Container } from './PhotoPage.styled'
import type { Photo } from '../../types/PhotoType'

const PhotoPage = () => {
  const { id } = useParams()
  const [photo, setPhoto] = useState<Photo | null>(null)
  const [loading, setLoading] = useState(true)

  const { toggleFavorite, favorites } = useFavoritesStore()
  const isFavorite = photo ? favorites.includes(photo.id) : false

  useEffect(() => {
    async function fetchPhoto() {
      try {
        const res = await unsplash.get(`/photos/${id}`)
        setPhoto(res.data)
      } finally {
        setLoading(false)
      }
    }

    fetchPhoto()
  }, [id])

  if (loading) return <Container>Загрузка...</Container>
  if (!photo) return <Container>Фото не найдено</Container>

  return (
    <Container>
      <PhotoDetailCard
        photo={photo}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />
    </Container>
  )
}

export default PhotoPage;