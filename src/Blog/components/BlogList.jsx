import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { fetchPosts } from "../api/api";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const posts = await fetchPosts();
        setBlogs(posts);
      } catch (err) {
        setError("Failed to load blogs.");
      } finally {
        setLoading(false);
      }
    };
    loadBlogs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Blog Posts</h2>
      <Link to="/add">
        <button>Add New Post</button>
      </Link>
      {blogs.map((blog) => (
        <div key={blog.id} style={{ border: "1px solid black", margin: "10px" }}>
          <h3>{blog.title}</h3>
          <p>{blog.body.slice(0, 100)}...</p>
          <Link to={`/blogs/${blog.id}`}>
            <button>Read More</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
