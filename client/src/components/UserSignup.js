import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function UserSignup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function saveUser() {
    let data = { username, password };
    fetch("http://localhost:8080/api/v1/user/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      console.warn("result", result);
    });
  }
  return (
    <div className="container p-5">
      <h2>User Signup</h2>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="form-control"
            id="inputusername"
            name="username"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="form-control"
            id="inputPassword"
            name="password"
            required
          />
        </div>
        <div className="col-12">
          <Link to="/">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={saveUser}
            >
              SignUp
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
