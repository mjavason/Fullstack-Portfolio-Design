const labelsVisitors = ["January", "February", "March", "April", "May", "June", "July"];
const dataVisitors = {
  labels: labelsVisitors,
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: darkBlue,
      tension: 0.4,
      pointRadius: 5,
      pointHoverRadius: 10,
    },
  ],
};
const optionsVisitors = {
  hover: {
    animationDuration: 0, // 🔥 Removes hover delay
  },
  animation: {
    duration: 3000, // 🔥 Speeds up chart animations (default is 1000ms)
  },
  scales: {
    x: {
      grid: {
        display: false, // Removes vertical grid lines
      },
      ticks: {
        display: false,
      },
      border: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false, // Removes horizontal grid lines
      },
      ticks: {
        display: false,
      },
      border: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false, // 🔥 Hides the legend
    },
  },
};

const ctxVisitors = document.getElementById("visitors").getContext("2d");
new Chart(ctxVisitors, {
  type: "line", // Can be 'line', 'pie', 'radar', etc.
  data: dataVisitors,
  options: optionsVisitors,
});
