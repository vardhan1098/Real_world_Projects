import React, { useCallback, useEffect, useState } from "react";
import "./index.css";
import useDebounce from "../CustomHooks/useDebounce";

const Search = ({isNav}) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchPosts, setSearchPosts] = useState("");
  const debouncedItems = useDebounce(searchPosts, 500);
  const [currentItem, setCurrentItem] = useState(1);
  const totalItems = 10;
  const TotalItemsPage = Math.ceil(posts.length / totalItems);

  const CurrentItemsPerPage = posts.slice((currentItem - 1) * totalItems, currentItem * totalItems);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const apiresponse = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!apiresponse.ok) {
        throw new Error("Network is Failed...");
      }
      const data = await apiresponse.json();
      setLoading(true);
      setPosts(data);
    } catch (error) {
      setError(error.meesage || "Error Posts Is Not Coming..");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(debouncedItems.toLowerCase())
  );

  const handlePage = (page)=>{
    setCurrentItem(page)
  }

  return (
    <div>
      <h2>Posts</h2>
      <div className="search-field">
        <input
          type="text"
          placeholder="Enter a Posts.."
          value={searchPosts}
          onChange={(e) => setSearchPosts(e.target.value)}
        />
      </div>
      {loading && <p>Loading..</p>}
      {CurrentItemsPerPage.map((post, idx) => (
        <div style={{ border: "1px solid black" }} key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}

      <>{filteredPosts.length === 0 && <p>No Posts Found..</p>}</>
      {
        Array.from({length:totalItems},(_,index)=> index+1).map((pagenum)=>(
            <button key={pagenum} disabled={pagenum === currentItem} onClick={()=>handlePage(pagenum)}>{pagenum}</button>
        ))
      }
    </div>
  );
};

export default Search;
