import React from "react";
import styles from "./layout.module.css";
import SideBar from "@/components/sidebar/sidebar";
import Header from "@/components/header/header";

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.colOne}>
          <SideBar />
        </div>
        <div className={styles.colTwo}>
          <div>
            <Header />
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
