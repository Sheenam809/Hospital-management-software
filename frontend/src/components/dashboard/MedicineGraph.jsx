import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export const data  = {
  labels: ["Paracetamol", "Vitamins Tablets", "Antacid Tablets", "Others"],
  datasets: [
    {
      label: "Medicine Sold",
      data: [55, 12, 25, 8],
      backgroundColor: ["#61A6F1", "#E7C86A", "#7BCC8F", "#DB79C5"],
      borderWidth: 0,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      color: "white",
      font: {
        size: 14,
        weight: "bold",
      },
      formatter: (value, context) => {
        const dataArr = context.chart.data.datasets[0].data;
        const total = dataArr.reduce((acc, val) => acc + val, 0);
        const percentage = ((value / total) * 100).toFixed(0);
        return `${percentage}%`;
      },
    },
  },
  cutout: "60%",
};

const MedicineGraph = () => {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "15px",
        width: "430px",
        height: "300px",
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h3 style={{ fontWeight: "bold", marginBottom: "15px" }}>
          Medicine Sold
        </h3>

        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
            Select
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item">Daily</a></li>
            <li><a className="dropdown-item">Weekly</a></li>
            <li><a className="dropdown-item">Monthly</a></li>
            <li><a className="dropdown-item">Yearly</a></li>
            <li><a className="dropdown-item">All</a></li>
          </ul>
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <ul className="list-group">
          <li>Paracetamol</li>
          <li>Vitamins Tablets</li>
          <li>Antacid Tablets</li>
          <li>Others</li>
        </ul>

        <div style={{ width: "55%" }}>
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default MedicineGraph;
