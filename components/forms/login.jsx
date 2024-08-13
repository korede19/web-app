import React from "react";
import styles from "./forms.module.css";
import Image from "next/image";
import Link from "next/link";

const LoginForm = () => {
  return (
    <>
      <div className={styles.formContain}>
        <div className={styles.logoImg}>
          <Image src="/assets/Logo.png" width={150} height={40} alt="logo" />
        </div>
        <div className={styles.contain}>
          <h1>Welcome Back</h1>
          <p>
            Please enter your credentials below to access your account and
            manage your platform with ease.
          </p>
        </div>
        <div className={styles.inputFormcontain}>
          <input
            type="text"
            className={styles.inputForm}
            placeholder="User ID"
          />
          <input
            type="password"
            className={styles.inputForm}
            placeholder="Password"
          />
        </div>
        <div className={styles.btnContain}>
          <button>
            <p>Login</p>
          </button>
          <Link href="/forgetPassword">
            <h6>Forgot Password</h6>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
