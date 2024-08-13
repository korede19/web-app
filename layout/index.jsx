import React from "react";
import styles from "./layout.module.css";
import SideBar from "@/components/sidebar/sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.colOne}>
          <SideBar />
        </div>
        <div className={styles.colTwo}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
