import React, { useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SalesChart = () => {
  
  const salesData = [
    { month: 'January', sales: 500 },
    { month: 'February', sales: 700 },
    { month: 'March', sales: 600 },
    { month: 'April', sales: 800 },
    { month: 'May', sales: 800 },
    { month: 'June', sales: 800 },
    { month: 'July', sales: 800 },
    { month: 'August', sales: 800 },
  ];

  const chartData = useMemo(() => {
    return {
      labels: salesData.map(item => item.month),
      datasets: [
        {
          label: 'Sales Data',
          data: salesData.map(item => item.sales),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
  }, [salesData]);

  const chartOptions = useMemo(() => {
    return {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Sales Data by Month',
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              return `$${tooltipItem.raw}`;
            },
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Month',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Sales',
          },
        },
      },
    };
  }, []);

  return <Bar data={chartData} options={chartOptions} />;
};

export default SalesChart;
