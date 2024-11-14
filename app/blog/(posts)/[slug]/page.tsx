import { getContentForBlogPost } from "@/content/queries";

const BlogPost = async ({ params }) => {
  const data = await getContentForBlogPost(params.slug);

  console.log("this is data");

  return (
    <div>
      <h2>post id</h2>
      <p>dynamic post content check:</p>
    </div>
  );
};
export default BlogPost;
