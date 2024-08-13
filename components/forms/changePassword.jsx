import React from "react";
import styles from "./forms.module.css";
import Image from "next/image";

const NewPassword = () => {
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
        <div className={styles.inputFormcontain}>
          <input
            type="text"
            className={styles.inputForm}
            placeholder="User ID"
          />
        </div>
        <div className={styles.btnContain}>
          <button>
            <p>Confirm User Id</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default NewPassword;
