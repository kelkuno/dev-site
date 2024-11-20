import { getContentForBlogPost, getAllBlogSlugs } from "@/content/queries";
import Image from "next/image";

export const generateStaticParams = async () => {
  const slugData = await getAllBlogSlugs();
  return slugData.blogPostCollection.items;
};

export default async function BlogPostPage({ params }) {
  const data = await getContentForBlogPost(params.slug);
  const content = data.blogPostCollection.items[0];
  const coverImage = content.imageCollection.items[0];

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
