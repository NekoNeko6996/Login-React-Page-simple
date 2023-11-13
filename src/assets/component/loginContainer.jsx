import { useState } from "react";
import { Link } from "react-router-dom";

import "../../css/loginContainer.css";
import { toast } from "react-toastify";

export default function LoginContainer() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = async () => {
    if (username == "") {
      toast.error("Require Username!");
      return;
    }
    if (password == "") {
      toast.error("Require Password!");
      return;
    }

    fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({
        username: username,
        password: password,
        date: new Date(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="login-register-container">
      <form action="" id="login-form">
        <h1>Login</h1>
        <div id="username-box">
          <input
            type="text"
            name="username"
            id="input-username"
            className="input"
            required
            autoComplete="current-username"
            onChange={(element) => setUsername(element.target.value)}
          />
          <p id="p-username" className="input-title">
            User Name
          </p>
        </div>
        <div id="password-box">
          <input
            type="password"
            name="password"
            id="input-password"
            className="input"
            required
            autoComplete="current-password"
            onChange={(element) => setPassword(element.target.value)}
          />
          <p id="p-password" className="input-title">
            Password
          </p>
        </div>
        <input
          type="button"
          value="Login"
          id="input-login-btn"
          onClick={submitLogin}
        />
        <p id="p-text-create-account">
          No Account?{" "}
          <Link to={`/register`} id="create-account-link">
            Create one
          </Link>
        </p>
      </form>
    </div>
  );
}
