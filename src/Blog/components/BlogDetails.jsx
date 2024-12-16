import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchPostById } from "../api/api";
import CommentSection from "./CommentSection";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const post = await fetchPostById(id);
        setBlog(post);
      } catch (error) {
        console.error("Error loading blog:", error);
      } finally {
        setLoading(false);
      }
    };
    loadBlog();
  }, [id]);

  if (loading) return <p>Loading blog...</p>;
  if (!blog) return <p>Blog not found.</p>;

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>
      <CommentSection postId={id} />
    </div>
  );
};

export default BlogDetails;
