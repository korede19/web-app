import Layout from "@/layout";
import React from "react";
import styles from "./home.module.css";
import PriceAll from "@/components/priceBoard-all/price-all";
import SalesChart from "@/components/salesChart/saleschart";
import ChartTwo from "@/components/saleschart2";
import Orders from "@/components/orders";
import DashboardComponent from "@/components/dashboard/dashoard";

const Homepage = () => {
  return (
    <>
      <Layout>
        <DashboardComponent />
        <PriceAll />
        <div className={styles.Container}>
          <div className={styles.colOne}>
            <SalesChart />
          </div>
          <div className={styles.colTwo}>
            <ChartTwo />
          </div>
        </div>
        <Orders />
      </Layout>
    </>
  );
};

export default Homepage;
