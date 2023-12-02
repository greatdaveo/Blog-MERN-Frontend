import React from "react";
import "../styles/MainPost.css";
import { Link } from "react-router-dom";
// The library used to format the date
import formatISO9075 from "date-fns/formatISO9075";

const MainPost = ({
  _id,
  title,
  summary,
  fileCover,
  content,
  createdAt,
  author,
}) => {
  return (
    <div className="main">
      <div className="post">
        <div className="image">
          <Link to={`/post/${_id}`}>
            <img src={"http://localhost:4000/" + fileCover} alt="" />
          </Link>
        </div>
        <div className="text">
          <Link to={`/post/${_id}`}>
            <h2>{title}</h2>
          </Link>
          <p className="info">
            <a className="author">by @{author && author.username}</a>
            <time>{formatISO9075(new Date(createdAt))}</time>
          </p>
          <p className="summary">{summary}</p>
        </div>
      </div>
    </div>
  );
};

export default MainPost;
