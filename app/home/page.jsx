import Layout from "@/layout";
import React from "react";
import styles from "./home.module.css";
import PriceAll from "@/components/priceBoard-all/price-all";
import SalesChart from "@/components/salesChart/saleschart";
import ChartTwo from "@/components/saleschart2";

const Homepage = () => {
  return (
    <>
      <Layout>
        <PriceAll />
        <div className={styles.Container}>
          <div className={styles.colOne}>
            <SalesChart />
          </div>
          <div className={styles.colTwo}>
            <ChartTwo />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Homepage;
