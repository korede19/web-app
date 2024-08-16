import React from "react";
import styles from "./price.module.css";
import Image from "next/image";

const PriceBoard = ({
  title,
  date,
  amount,
  image,
  increase,
  percentage,
  text,
  profit,
}) => {
  return (
    <>
      <div className={styles.priceTab}>
        <div className={styles.rowOne}>
          <h3>{title}</h3>
          <p>{date}</p>
        </div>
        <div className={styles.rowTwo}>
          <h1>{amount}</h1>
          <Image src={image} width={94} height={64} alt="img" />
        </div>
        <div className={styles.rowThree}>
          {increase}
          <p className={profit === "gain" ? styles.profit : styles.loss}>
            {percentage}
          </p>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default PriceBoard;
