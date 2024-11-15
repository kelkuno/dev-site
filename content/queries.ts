import "server-only"
import { contentGQLQuery } from "./fetch";
import { BlogPostQuery } from "@/types";

export const getContentForBlogPost = async (slug:string) => {
    const query = `#graphql
    query BlogPostCollection($where: BlogPostFilter) {
  blogPostCollection(where: $where) {
    items {
      title
      slug
      summary
      body {
        json
      }
      imageCollection {
        items {
          description
          height
          url
          width
        }
      }
      _id
      design
      dev
    }
  }
}
`

const data = await contentGQLQuery<BlogPostQuery>({
    query, 
    variables: {
    where: {
        slug,
    }
}})
if (!data) {
    throw new Error("oops")
}
return data
}