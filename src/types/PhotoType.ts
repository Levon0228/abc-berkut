export type Photo = {
    id: string
    urls: {
      small: string
      regular: string
      full?: string
      thumb?: string
    }
    alt_description: string
    description:string
    created_at?: string
    user: {
      name: string
      username?: string
    }
  }
  