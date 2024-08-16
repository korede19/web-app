"use client";
import React, { useState } from "react";
import styles from "./sales.module.css";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartTwo = () => {
  const [data, setData] = useState({
    series: [67, 55],
    options: {
      labels: ["Lowest Earning", "Highest Earnings"],
      plotOptions: {
        pie: {
          donut: {
            size: "90%",
            labels: {
              show: true,
              value: {
                showAlways: true,
                show: true,
                fontSize: "16px",
                fontFamily: "Mona-Sans, san-serif",
                fontWeight: 400,
              },
              total: {
                showAlways: true,
                show: true,
                fontSize: "24px",
                fontFamily: "Mona-Sans, san-serif",
                fontWeight: 700,
                color: "#373d3f",
                label: "80%",
                formatter: () => "Total Sales",
              },
            },
          },
        },
      },
      chart: {
        type: "donut",
        width: 200,
      },
      responsive: [
        {
          breakpoint: 760,
          options: {
            colors: ["#2EC66B", "#D5F4E1"],
            chart: {
              width: 200,
            },
            dataLabels: {
              enabled: false,
            },
            legend: {
              position: "bottom",
            },
          },
        },
        {
          breakpoint: 5000,
          options: {
            colors: ["#2EC66B", "#D5F4E1"],
            dataLabels: {
              enabled: false,
            },
            legend: {
              position: "bottom",
              fontSize: "14px",
              fontFamily: "Mona-Sans, san-serif",
              fontWeight: 500,
              labels: {
                colors: "#222",
                useSeriesColors: false,
              },
            },
          },
        },
      ],
    },
  });
  return (
    <>
      <div className={styles.chartContain}>
        <div className={styles.rowOne}>
          <div>
            <h2>Earning Report</h2>
            <p>Income report seen as graphs</p>
          </div>
          <div>
            <select>
              <option value="">Monthly</option>
              <option>Yearly</option>
            </select>
          </div>
        </div>
        <div className={styles.rowTwo}>
          <ApexChart
            options={data.options}
            series={data.series}
            type="donut"
            width="100%"
            height={410}
          />
        </div>
      </div>
    </>
  );
};

export default ChartTwo;
