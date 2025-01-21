import { getContentForBlogPost, getAllBlogSlugs } from "@/content/queries";
import Image from "next/image";
import Styles from "./page.module.css";

export const generateStaticParams = async () => {
  const slugData = await getAllBlogSlugs();
  return slugData.blogPostCollection.items;
};

export default async function BlogPostPage({ params }) {
  const data = await getContentForBlogPost(params.slug);
  const content = data.blogPostCollection.items[0];
  const coverImage = content.imageCollection.items[0];

  return (
    <div className="container">
      <div className={`flex ${Styles.paper}`}>
        <div>
          <h2>{content.title}</h2>
          <h4>{content.summary}</h4>
        </div>
        <div>
          <Image
            src={coverImage.url}
            alt={coverImage.description}
            width={coverImage.width}
            height={coverImage.height}
          />
        </div>
      </div>
    </div>
  );
}
