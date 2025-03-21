import { getAllBlogPosts } from "@/content/queries";
import Link from "next/link";
import Image from "next/image";

const BlogPage = async () => {
  const data = await getAllBlogPosts();
  const blogs = data.blogPostCollection.items;

  return (
    <div className="container">
      <h1>blog</h1>
      <p>Blog with dynamic headless CMS content coming soon...</p>
      {/* <ul>
        {blogs.map((blog) => (
          <li key={blog._id}>
            <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
            <Image
              src={blog.imageCollection.items[0].url}
              alt={blog.imageCollection.items[0].description}
              width={blog.imageCollection.items[0].width}
              height={blog.imageCollection.items[0].height}
            />
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default BlogPage;
