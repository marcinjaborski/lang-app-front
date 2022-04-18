import React, { useState } from "react";
import { LoginStyled } from "./styles/Login.styled";
import LoginInput from "./LoginInput";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import LoginButton from "./LoginButton";
import { useNavigate } from "react-router-dom";
import cookie from "react-cookies";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, password };
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        cookie.save("token", data.token, { path: "/" });
      })
      .catch((err) => {});
  };

  return (
    <LoginStyled>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <LoginInput label="Username" icon={faUser} value={username} setValue={setUsername} />
        <LoginInput label="Password" icon={faLock} value={password} setValue={setPassword} type="password" />
        <LoginButton text="Login" />
      </form>
    </LoginStyled>
  );
};

export default Login;
