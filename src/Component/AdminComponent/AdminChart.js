import React, { useState } from "react";
import Chart from "react-apexcharts";
export default function Sales() {
  const series = [
    {
      name: "USER",
      data: [30, 40, 45, 30, 49, 60, 70, 91,50],//count of user account
    },
    {
        name: "SELLER",
        data: [20, 30, 35, 20, 39, 50, 30, 81,20],//count of seller account
      },
  ];
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ['Aug', 'Sep', 'Oct','Nov','Dec','Jan','Feb','Mar','Aug', 'Sep', 'Oct','Nov','Dec','Jan','Feb','Mar'],
    },
  };
  return (
    <div className='container'>
      <Chart
        options={options}
        series={series}
        type="line"
        width="1050"
        height="500"
      />
    </div>
  );
}
