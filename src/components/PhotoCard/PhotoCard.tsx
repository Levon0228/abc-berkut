

import { Link } from 'react-router-dom'
import type { Photo } from '../../types/PhotoType'
import { Card, Img } from './PhotoCard.styled'

type Props = {
  photo: Photo
}

function PhotoCard({ photo }: Props) {
  return (
    <Link to={`/photo/${photo.id}`}>
      <Card>
        <Img src={photo.urls.small} alt={photo.alt_description} />
      </Card>
    </Link>
  )
}

export default PhotoCard
