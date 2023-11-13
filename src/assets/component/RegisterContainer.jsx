import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import "../../css/registerContainer.css";

export default function RegisterContainer() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const submitRegister = async () => {
    if (password != repeatPassword) {
      toast.error("password and repeat password are not same!");
      return;
    }
    if (username == "") {
      toast.error("Require Username!");
      return;
    }
    if (password == "") {
      toast.error("Require Password!");
      return;
    }
    
    fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
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
        console.error(err);
      });
  };

  return (
    <div id="login-register-container">
      <form action="" id="login-form">
        <h1>Register</h1>
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
        <div id="repeat-password-box">
          <input
            type="password"
            name="repeat-password"
            id="input-repeat-password"
            className="input"
            required
            autoComplete="current-password"
            onChange={(element) => setRepeatPassword(element.target.value)}
          />
          <p id="p-password" className="input-title">
            Repeat password
          </p>
        </div>
        <input
          type="button"
          value="Login"
          id="input-login-btn"
          onClick={submitRegister}
        />
        <p id="p-text-create-account">
          Have an account?{" "}
          <Link to={`/login`} id="create-account-link">
            Login now
          </Link>
        </p>
      </form>
    </div>
  );
}
