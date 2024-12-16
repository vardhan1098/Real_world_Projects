import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { createPost, fetchPostById, updatePost } from "../api/api";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const loadPost = async () => {
        const post = await fetchPostById(id);
        setTitle(post.title);
        setBody(post.body);
      };
      loadPost();
    }
  }, [id]);

  const handleSubmit = async () => {
    if (!title || !body) return alert("Both fields are required!");

    const newPost = { title, body };
    if (id) {
      await updatePost(id, newPost);
    } else {
      await createPost(newPost);
    }
    navigate("/");
  };

  return (
    <div>
      <h2>{id ? "Edit Blog" : "Add New Blog"}</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={handleSubmit}>{id ? "Update" : "Add"} Blog</button>
    </div>
  );
};

export default BlogForm;
