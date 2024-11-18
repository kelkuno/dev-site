import { getContentForBlogPost } from "@/content/queries";
import Image from "next/image";

export default async function BlogPostPage({ params }) {
  const data = await getContentForBlogPost(params.slug);
  //kels make a content variable p
  const content = data.blogPostCollection.items[0];
  const coverImage = content.imageCollection.items[0];
  console.log("this is data:", data);
  console.log("this is content:", content);
  console.log("this is image:", coverImage);
  return (
    <div>
      <h2>dynamic blog post data</h2>
      <p>hello fetch blog post data: {content.title}</p>
      <Image
        src={coverImage.url}
        alt={coverImage.description}
        width={coverImage.width}
        height={coverImage.height}
      />
    </div>
  );
}
