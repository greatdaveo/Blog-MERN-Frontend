import React from "react";
import "../styles/MainPost.css";
// The library used to format the date
// import { formatISO9075 } from "date-fns";
// <time>{formatISO9075(new Date(createdAt))}</time>

const MainPost = ({ title, summary, fileCover, content, createdAt, author }) => {
  return (
    <div className="entry">
      <div className="post">
        <div className="image">
          <img
            src={"http://localhost:4000/" + fileCover}
            alt=""
          />
        </div>
        <div className="text">
          <h2>{title}</h2>
          <p className="info">
            <a className="author">{author && author.username}</a>
            <time>{createdAt}</time>
          </p>
          <p className="summary">{summary}</p>
        </div>
      </div>
    </div>
  );
};

export default MainPost;
