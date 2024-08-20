"use client";
import React from "react";
import styles from "./forms.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [generalError, setGeneralError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setEmailError(null);
    setPasswordError(null);
    setGeneralError(null);

    // Basic form validation
    if (!email) {
      setEmailError("*Email is required.");
    }
    if (!password) {
      setPasswordError("*Password is required.");
    }

    if (!email || !password) {
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/home");
    } catch (error) {
      setGeneralError("Login failed. Please check your credentials.");
    }
  };

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
        <form onSubmit={handleLogin}>
          <div className={styles.inputFormcontain}>
            <div>
              <input
                type="email"
                id="email"
                className={styles.inputForm}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="User ID/ Email"
              />
              {emailError && <p className={styles.errorMsg}>{emailError}</p>}
            </div>
            <div>
              <input
                type="password"
                id="password"
                className={styles.inputForm}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              {passwordError && (
                <p className={styles.errorMsg}>{passwordError}</p>
              )}
            </div>
          </div>
          <div className={styles.btnContain}>
            <button type="submit">
              <p>Login</p>
            </button>
            {generalError && <p className={styles.errorMsg}>{generalError}</p>}
            <Link href="/forgetPassword">
              <h6>Forgot Password</h6>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
