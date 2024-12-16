import React, { useEffect, useState } from "react";
import axios from "axios";

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        );
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchComments();
  }, [postId]);

  const handleAddComment = () => {
    if (commentText.trim() === "") return;

    const newComment = {
      id: new Date().getTime(),
      postId,
      body: commentText,
    };

    setComments((prev) => [...prev, newComment]);
    setCommentText("");
  };

  if (loading) return <p>Loading comments...</p>;

  return (
    <div>
      <h3>Comments</h3>
      {comments.map((comment) => (
        <p key={comment.id}>{comment.body}</p>
      ))}
      <textarea
        placeholder="Add a comment"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
};

export default CommentSection;
