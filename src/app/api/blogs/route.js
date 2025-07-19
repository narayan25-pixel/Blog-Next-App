import mongoose from "mongoose";
import connectDB from "../../../../config/database";
import  Blog  from "../../../../models/blog";

// Create the Mongoose model if it doesn't exist

export async function GET() {
  await connectDB();
  const BlogList = await Blog.find({}).lean();
  return Response.json(BlogList);
}