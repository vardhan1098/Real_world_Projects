import React, { useEffect, useState } from "react";
import UseDebounce from "./UseDebounce";

const Optimized = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const totalPostPerPage = Math.ceil(posts.length / totalPages);

  const fetchingPosts = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!apiResponse.ok) {
        throw new Error("Network is Failed..");
      }
      const data = await apiResponse.json();
      setPosts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchingPosts();
  }, []);

  const debounceSearch = UseDebounce(search, 500);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(debounceSearch.toLowerCase())
  );

  const currentPagePosts = filteredPosts.slice(
    (currentPage - 1) * totalPostPerPage,
    currentPage * totalPostPerPage
  );

  const handlePosts = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h2>Posts</h2>
      <input
        type="text"
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          borderRadius: "20px",
          border: "1px solid black",
        }}
        placeholder="Enter a Posts"
        autoFocus
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {currentPagePosts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid black",
              gap: "10px",
              marginBottom: "10px",
            }}
          >
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
      <div>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNum) => (
            <button
              key={pageNum}
              disabled={currentPage === pageNum}
              onClick={() => handlePosts(pageNum)}
            >
              {pageNum}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Optimized;
