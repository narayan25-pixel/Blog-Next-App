"use client";
import { useEffect } from "react";
import { io } from "socket.io-client";

export default function BlogListClient() {
  useEffect(() => {
    const socket = io("http://localhost:5000");
    socket.on("new-blog", (blog) => {
      alert("New blog added: " + blog.title);
      // Or update your state/UI here
    });
    return () => socket.disconnect();
  }, []);

  return null; // Or your client-side blog list UI
}