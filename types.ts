export type BlogPostQuery = {
    blogPostCollection: {
        items: {
          title: string
          slug: string
          summary: string
          body: {
            json:JSON
          }
          imageCollection: {
            items: {
              description: string
              height: number
              url: string
              width: number
            }[]
          }
          _id: string
          design: boolean
          dev: boolean
        }[]
      }
}