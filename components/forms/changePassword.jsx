"use client";
import { useState } from "react";
import styles from "./forms.module.css";
import Image from "next/image";
import { sendPasswordResetEmail } from "../../lib/firebase";
import { auth } from "../../lib/firebase";

const NewPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [generalError, setGeneralError] = useState(null);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setEmailError(null);
    setGeneralError(null);
    setSuccessMessage(null);

    // Basic form validation
    if (!email) {
      setEmailError("Email is required.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccessMessage("Password reset email sent! Please check your inbox.");
    } catch (error) {
      setGeneralError("Failed to send password reset email. Please try again.");
    }
  };

  return (
    <>
      <div className={styles.formContain}>
        <div className={styles.logoImg}>
          <Image src="/assets/Logo.png" width={150} height={40} alt="logo" />
        </div>
        <div className={styles.contain}>
          <h1>Forget Password</h1>
          <p>
            Please enter your credentials below to access your account and
            manage your platform with ease.
          </p>
        </div>
        <form onSubmit={handleForgotPassword}>
          <div className={styles.inputFormcontain}>
            <input
              type="Enter your Email"
              className={styles.inputForm}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className={styles.errorMsg}>{emailError}</p>}
          </div>
          <div className={styles.btnContain}>
            <button type="submit">
              <p>Confirm User Id</p>
            </button>
            {generalError && <p className={styles.errorMsg}>{generalError}</p>}
            {successMessage && (
              <p className={styles.errorMsgSuccess}>{successMessage}</p>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default NewPassword;
