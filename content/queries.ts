import { HeroQuery } from "@/types"
import { contentGQLQuery } from "./fetch"

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