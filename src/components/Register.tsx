import React, { useState } from "react";
import { LoginStyled } from "./styles/Login.styled";
import LoginInput from "./LoginInput";
import { faAt, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import LoginButton from "./LoginButton";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, email, password, password2 };
    fetch("http://localhost:5000/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {});
  };
  return (
    <LoginStyled>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <LoginInput label="Username" icon={faUser} value={username} setValue={setUsername} />
        <LoginInput label="Email" icon={faAt} value={email} setValue={setEmail} />
        <LoginInput label="Password" icon={faLock} value={password} setValue={setPassword} type="password" />
        <LoginInput label="Repeat password" icon={faLock} value={password2} setValue={setPassword2} type="password" />
        <LoginButton text="Sign-up" />
      </form>
    </LoginStyled>
  );
};

export default Register;
