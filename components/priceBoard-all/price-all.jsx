import React from "react";
import styles from "./price-all.module.css";
import PriceBoard from "../priceBoard/price";
import { Sales } from "@/utils/data";

const PriceAll = () => {
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.Contain}>
          {Sales?.map((item, index) => {
            return (
              <PriceBoard
                key={index}
                title={item.title}
                date={item.date}
                amount={item.amount}
                image={item.image}
                increase={item.increase}
                percentage={item.percentage}
                text={item.text}
                profit={item.profit}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PriceAll;
