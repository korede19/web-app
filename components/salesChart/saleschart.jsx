"use client";
import React, { useState } from "react";
import styles from "./saleschart.module.css";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SalesChart = () => {
  const [data, setData] = useState({
    series: [
      {
        name: "Net-Profit",
        data: [200, 400, 500, 400, 300, 800, 400, 500, 600, 500, 700],
      },
      {
        name: "Revenue",
        data: [150, 300, 450, 350, 250, 750, 350, 450, 500, 450, 650],
      },
    ],
    options: {
      legend: {
        show: false,
      },
      chart: {
        fontFamily: "Mona-Sans, san-serif",

        toolbar: {
          show: false,
        },
        type: "bar",
        height: 450,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "70%",
          borderRadius: 12,
          borderRadiusApplication: "end",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        max: 1000,
        stepSize: 200,
      },
      fill: {
        opacity: 1,
        colors: ["#2EC66B", "#D5F4E1"],
      },
    },
  });

  return (
    <>
      <div className={styles.chartContain}>
        <div className={styles.rowOne}>
          <h2>Sales Overview</h2>
          <select>
            <option value="">Monthly</option>
            <option>Yearly</option>
          </select>
        </div>
        <div className={styles.rowTwo}>
          <ApexChart
            options={data.options}
            series={data.series}
            type="bar"
            width="100%"
            height={392}
          />
        </div>
      </div>
    </>
  );
};

export default SalesChart;
