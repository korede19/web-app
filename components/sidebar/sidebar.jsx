import React from "react";
import styles from "./sidebar.module.css";
import Image from "next/image";
import DropdownMenu from "../dropdown/dropdown";

const SideBar = () => {
  return (
    <>
      <div className={styles.sidebarContain}>
        <div className={styles.logoContain}>
          <Image src="/assets/Logo.png" width={150} height={40} alt="Logo" />
        </div>
        <div className={styles.menu}>
          <h4>Menu</h4>
          <DropdownMenu />
        </div>
      </div>
    </>
  );
};

export default SideBar;
