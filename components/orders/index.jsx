import React from "react";
import styles from "./page.module.css";
import { HeaderSet, Orders } from "@/utils/data";
import OrdersSingle from "../orders-single";

const OrderAll = () => {
  return (
    <>
      <div className={styles.Container}>
        <h2>Recent Orders</h2>
        <div className={styles.Header}>
          {HeaderSet?.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
        {Orders?.map((item, index) => {
          return (
            <OrdersSingle
              key={index}
              id={item.id}
              customer={item.customer}
              status={item.status}
              date={item.date}
              total={item.total}
            />
          );
        })}
      </div>
    </>
  );
};

export default OrderAll;
