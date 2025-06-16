import axios from 'axios'
import type { Photo } from '../types/PhotoType'

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
})

export const getPhotoById = async (id: string): Promise<Photo> => {
  const res = await unsplash.get<Photo>(`/photos/${id}`)
  return res.data
}

export const getPhotosByIds = async (ids: string[]): Promise<Photo[]> => {
  const promises = ids.map(id =>
    getPhotoById(id).catch(err => {
      console.warn(`Fail to load photo ${id}:`, err)
      return null 
    })
  )

  const photos = await Promise.all(promises)
  return photos.filter((p): p is Photo => p !== null)
}

export default unsplash
