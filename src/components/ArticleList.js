// ArticleList.js (updated)

import React from "react";
import Article from "./Article";

const ArticleList = ({ posts }) => {
  if (!posts || posts.length === 0) {
    // If posts are not provided or is an empty array, display a message or fallback content
    return <div>No articles to display.</div>;
  }

  return (
    <main>
      {posts.map((post) => (
        <Article key={post.id} title={post.title} content={post.content}  minutes={post.minutes}/>
      ))}
    </main>
  );
};

export default ArticleList;
