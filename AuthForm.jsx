import React from "react";
import { useState } from "react";
import styles from "../styles/authform.module.css";
import { useRef } from "react";

const AuthForm = ({ islogin, setIsLogin, setUserName }) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const user = {
    email: "neil@email.com",
    username: "neil",
    password: "abc123",
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    if (email !== user.email) {
      alert("Email not correct");
      return;
    } else if (password !== user.password) {
      alert("Password not correct");
      return;
    }

    alert("Login Successful");
    setIsLogin(true);
    setUserName(user.username);
  };

  return (
    <div>
      <h1>{islogin ? "Login" : "Sign up"}</h1>

      <form onSubmit={submitHandler}>
        <label>Email Info</label>
        <input type="email" ref={emailInputRef} id={styles.player2} />

        <label>Password Info </label>
        <input type="password" ref={passwordInputRef} id={styles.player2} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AuthForm;
