import React from "react";
import styles from "./header.module.css";
import Search from "@/svg/search";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className={styles.headerContain}>
        <div className={styles.colOne}></div>
        <div className={styles.colTwo}>
          <div className={styles.formWrap}>
            <div>
              <Search />
            </div>
            <input
              type="text"
              placeholder="Search for rider name"
              className={styles.inputForm}
            />
          </div>
          <div>
            <Image
              src="/assets/profile.png"
              width={50}
              height={50}
              alt="profile"
            />
          </div>
          <div className={styles.userName}>
            <h3>Hello World</h3>
            <p>Super Admin</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
