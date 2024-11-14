export type BlogPostQuery = {

  blogPostCollection: {
    items: {
      body: {
        json: JSON
      }
      _id: string
      ctaCollection: {
        items: {
          href: string
          text: string
        }
      }[]
      slug: string
      summary:string
      title:string
    }[]
  }
}


export type HeroQuery = {
    heroCollection {
        items: {
          title: string
          preTitle: string
        }[]
      }
    }
}