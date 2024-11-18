import "server-only";
import { contentGQLQuery } from "./fetch";
import { BlogPostQuery, BlogPostListQuery, BlogSlugQuery } from "@/types";

export const getAllBlogSlugs = async () => {
  const query = `#graphql
 query BlogPostCollection {
  blogPostCollection {
    items {
      slug
    }
  }
} 
  `;

  const data = await contentGQLQuery<BlogSlugQuery>({
    query,
  });
  if (!data) {
    throw new Error("oops");
  }
  return data;
};

export const getAllBlogPosts = async () => {
  const query = `#graphql
 query BlogPostCollection {
  blogPostCollection {
    items {
      _id
      title
      imageCollection {
        items {
          height
          url
          width
          description
        }
      }
      slug
    }
  }
}
  `;
  const data = await contentGQLQuery<BlogPostListQuery>({ query });

  if (!data) {
    throw new Error("opps no blogs");
  }
  return data;
};

export const getContentForBlogPost = async (slug: string) => {
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
`;

  const data = await contentGQLQuery<BlogPostQuery>({
    query,
    variables: {
      where: {
        slug,
      },
    },
  });
  if (!data) {
    throw new Error("oops");
  }
  return data;
};
