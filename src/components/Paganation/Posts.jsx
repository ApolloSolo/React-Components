import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <ul>
            <li>{post.title}</li>
            <li>{post.body}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Posts;
