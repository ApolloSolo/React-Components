import React, { useState, useEffect } from "react";
import Posts from "./components/Paganation/Posts";
import Pagination from "./components/Paganation/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();

      setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="App">
      <Posts posts={currentPosts} loading={loading}/>
      <Pagination postsPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  );
}

export default App;
