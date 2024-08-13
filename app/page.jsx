import React from "react";
import styles from "./page.module.css";
import LoginForm from "@/components/forms/login";

const Login = () => {
  return (
    <>
      <div className={styles.LoginContain}>
        <div className={styles.colOne}>
          <LoginForm />
        </div>
        <div className={styles.colTwo}></div>
      </div>
    </>
  );
};

export default Login;
