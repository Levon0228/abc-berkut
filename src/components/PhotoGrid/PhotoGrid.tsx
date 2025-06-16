import { type FC } from 'react'
import PhotoCard from '../PhotoCard'
import type { Photo } from '../../types/PhotoType'
import { Grid } from './PhotoGrid.styled'

interface Props {
  photos: Photo[]
  isFavorite: (id: string) => boolean
  toggleFavorite: (id: string) => void
  withDescription?: boolean
}

const PhotoGrid: FC<Props> = ({ photos }) => {
  return (
    <Grid>
      {photos.map(photo => (
        <PhotoCard
          key={photo.id}
          photo={photo}
        />
      ))}
    </Grid>
  )
}

export default PhotoGrid
