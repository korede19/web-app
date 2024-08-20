import React from "react";
import styles from "./page.module.css";

const OrdersSingle = ({ id, customer, status, date, total }) => {
  return (
    <>
      <div className={styles.ordersContain}>
        <h4>{id}</h4>
        <p>{customer}</p>
        <p className={status == "Ongoing" ? styles.Ongoing : styles.Completed}>
          {status}
        </p>
        <p>{date}</p>
        <p>{total}</p>
      </div>
    </>
  );
};

export default OrdersSingle;
