import { getContentForBlogPost } from "@/content/queries";

export default async function BlogPostPage({ params }) {
  const data = await getContentForBlogPost(params.slug);
  //kels make a content variable p
  const content = data.blogPostCollection.items[0];
  console.log("this is data:", data);
  console.log("this is content:", content);
  return (
    <div>
      <h2>dynamic blog post data</h2>
      <p>hello fetch blog post data: {content.title}</p>
    </div>
  );
}
