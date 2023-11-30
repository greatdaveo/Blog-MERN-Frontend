import React from "react";
import "../styles/MainPost.css";

const MainPost = () => {
  return (
    <div className="entry">
      <div className="post">
        <div className="image">
          <img
            src="https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1232166951-e1678278081143.jpg?w=1390&crop=1"
            alt=""
          />
        </div>
        <div className="text">
          <h2>Full-house battery backup coming later this year</h2>
          <p className="info">
            <a className="author">David Olowomeye</a>
            <time>07-09-2023 2:40</time>
          </p>
          <p className="summary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            officiis velit corporis tempore sint voluptatem!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPost;
