import { HeroQuery } from "@/types"
import { contentGQLQuery } from "./fetch"

export const getContentForBlogPost = async (slug:string) => {
  const query = `#graphql
  query BlogPostCollection($where: BlogPostFilter) {
  blogPostCollection(where: $where) {
    items {
      body {
        json
      }
      _id
      ctaCollection {
        items {
          href
          text
        }
      }
      slug
      summary
      title
    }
  }
}
`
const data = await contentGQLQuery({query, variables: {
  where: {
    slug,
  }
}})
if (!data) {
  throw Error("oops no blogs")
}
return data
}

export const getContentForHero = async () => {
    const query = `#graphql
    query HeroCollection {
  heroCollection {
    items {
      title
      preTitle
    }
  }
}
`
const data = await contentGQLQuery<HeroQuery>({query})
if (!data) {
    throw Error("oops")
}
return data

}