import React from "react";
import Chart from "react-apexcharts";
export default function Donut() {
  const options = {};
  const series = [4, 55, 41, 17, 15];
  const labels = ["A", "B", "C", "D", "E"];
  return (
    <div>
      <Chart
        options={options}
        series={series}
        labels={labels}
        type="donut"
        width="390"
      />
    </div>
  );
}
