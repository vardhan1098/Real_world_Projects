import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const fetchPostById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
};

export const createPost = async (post) => {
  try {
    const response = await axios.post(`${BASE_URL}/posts`, post);
    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

export const updatePost = async (id, updatedPost) => {
  try {
    const response = await axios.put(`${BASE_URL}/posts/${id}`, updatedPost);
    return response.data;
  } catch (error) {
    console.error("Error updating post:", error);
    throw error;
  }
};

export const deletePost = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/posts/${id}`);
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error;
  }
};
