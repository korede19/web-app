"use client";
import { useState } from "react";
import styles from "./drop.module.css";
import Sales from "@/svg/sales";
import Arrow from "@/svg/arrow";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdownContainer}>
      <button className={styles.dropdownToggle} onClick={toggleDropdown}>
        <div className={styles.menuContain}>
          <div className={styles.salesMenu}>
            <div className={styles.salesTab}>
              <div className={styles.colJoin}>
                <Sales />
                <h2>Sales</h2>
              </div>
              <div>
                <Arrow />
              </div>
            </div>
          </div>
        </div>
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          <div className={styles.dropdownItem}>
            <li>New Order</li>
            <p>30</p>
          </div>
          <div className={styles.dropdownItem2}>
            <li>Ongoing</li>
            <p>25</p>
          </div>
          <div className={styles.dropdownItem3}>
            <li>Completed</li>
            <p>13</p>
          </div>
        </ul>
      )}
      <div className={styles.otherMeuns}>
        <div className={styles.otherMenus1}>
          <p>Total Number of Orders</p>
        </div>
        <div className={styles.otherMenus2}>
          <p>Assign Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
