import React, { useState } from "react";
import Chart from "react-apexcharts";
export default function LineChart() {
  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 30, 49, 60, 70, 91],
    },
  ];
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ['Aug', 'Sep', 'Oct','Nov','Dec','Jan','Feb','Mar'],
    },
  };
  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="area"
        width="100%"
        height="auto"
      />
    </div>
  );
}
