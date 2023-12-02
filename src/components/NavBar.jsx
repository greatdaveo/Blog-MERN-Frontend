import React, { useContext, useEffect, useState } from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const NavBar = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function handleLogout(e) {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  // To check username in the userInfo
  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">
        My Blog
      </Link>

      <nav>
        {username && (
          <>
            <span style={{ color: "red", fontWeight: "bold" }}>
              Hello👋 {username}
            </span>
            <Link to="/create">Create new post</Link>
            <a href="" onClick={handleLogout}>
              Logout
            </a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
