import connectDB from "../../config/database"
import  Blog  from "../../models/blog";
import BlogListClient from "../components/bloglistclient";

export default async function Page({ searchParams }) {
    await connectDB();
    const blogId = searchParams?.id ;
    let blogList = [];
  if (blogId) {
    // Query a single blog by ID
    blogList = await Blog.find({ _id: blogId }).lean();
  } else {
    // Query all blogs
    blogList = await Blog.find({}).lean();
  }
  console.log("bloglist",blogList)
  return (
    <>
    <h1>Welcome to my Blog</h1>
    <BlogListClient />
    <ul>
      {blogList.map((blog) => (
        <li key={blog._id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </li>
      ))}
      </ul>
    </>  )
}