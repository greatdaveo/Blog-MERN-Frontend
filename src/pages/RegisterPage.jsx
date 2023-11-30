import React, { useState } from "react";
import "../styles/LoginPage.css";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function submitRegister(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    console.log(response);

    if (response.status === 200) {
      alert("Registration Successful!");
    } else {
      alert("Registration Failed");
    }
  }

  return (
    <form onSubmit={submitRegister}>
      <h1>Register Page</h1>

      <input
        type="text"
        placeholder="Username"
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        autoComplete="off"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;
