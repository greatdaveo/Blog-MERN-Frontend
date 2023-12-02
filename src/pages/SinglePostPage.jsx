import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/SinglePost.css";
import formatISO9075 from "date-fns/formatISO9075";

const SinglePostPage = () => {
  const [postInfo, setPostInfo] = useState(null);

  // To access each Post ID
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/post/${params.id}`);
        const postData = await response.json();
        setPostInfo(postData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  if (!postInfo) {
    return "";
  }

  return (
    <div className="single-post-page">
      <h1>{postInfo.title}</h1>
      <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
      <div className="author">by @{postInfo.author.username}</div>
      <div className="image">
        <img src={`http://localhost:4000/${postInfo.fileCover}`} alt="" />
      </div>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
      />
    </div>
  );
};

export default SinglePostPage;
