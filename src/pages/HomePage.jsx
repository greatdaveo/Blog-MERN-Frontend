import React, { useState, useEffect } from "react";
import MainPost from "../components/MainPost";

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  // This is to get the created post from the Database to the home page
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/post");
        const postData = await response.json();
        // console.log(postData);
        setPosts(postData);
      } catch (err) {
        console.log("Error fetching data:");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {posts.length > 0 &&
        posts.map((eachPost) => (
          <div key={eachPost._id}>
            <MainPost {...eachPost} />
          </div>
        ))}
    </>
  );
}
