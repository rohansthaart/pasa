import React, { useState } from "react";
import Chart from "react-apexcharts";
export default function LineChart() {
  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
  };
  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="area"
        width="480"
        height="265"
      />
    </div>
  );
}
