import FavoriteButton from '../FavoriteButton'
import type { Photo } from '../../types/PhotoType'
import { Author, Description, Img, Title, Wrapper } from './PhotoDetailedCard.styled'

type Props = {
  photo: Photo
  isFavorite: boolean

  toggleFavorite: (id: string) => void
}

const PhotoDetailCard = ({ photo, isFavorite, toggleFavorite }: Props) => {
  return (
    <Wrapper>
      <Img src={photo.urls.regular} alt={photo.alt_description} />
      <Description>
        <Title>{photo.alt_description || 'Без описания'}</Title>
        <Author>by {photo.user.name}</Author>
        <FavoriteButton
          isActive={isFavorite}
          onClick={() => toggleFavorite(photo.id)}
        />
      </Description>
      {photo.description && <Description>{photo.description}</Description>}
    </Wrapper>
  )
}

export default PhotoDetailCard
