import React from "react";

function Article(props) {
  const { title, date, preview, minutes } = props;

  return (
    <article>
      <h3>{title}</h3>
      <small>{date ? date : "January 1, 1970"}</small>
      <p>{preview}</p>
      <small>{minutes} min read</small>
    </article>
  );
}

export default Article;
