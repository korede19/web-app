import NewPassword from "@/components/forms/changePassword";
import styles from "./page.module.css";
import React from "react";

const ForgetPassword = () => {
  return (
    <>
      <div className={styles.LoginContain}>
        <div className={styles.colOne}>
          <NewPassword />
        </div>
        <div className={styles.colTwo}></div>
      </div>
    </>
  );
};

export default ForgetPassword;
