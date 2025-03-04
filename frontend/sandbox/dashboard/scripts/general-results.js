const labelsGeneralResults = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const darkBlue = "rgb(76, 162, 254)";
const lightBlue = "rgb(173, 216, 230)";

const dataValues = [65, 49, 39, 51, 20, 55, 40, 16, 51, 60, 70, 50];

const dataGeneralResults = {
  labels: labelsGeneralResults,
  datasets: [
    {
      label: "My First Dataset",
      data: dataValues,
      backgroundColor: dataValues.map((value) => (value > 50 ? darkBlue : lightBlue)),
      borderColor: "rgb(76, 162, 254)",
      borderWidth: 1,
      barThickness: 10, // Makes bars slimmer
      categoryPercentage: 0.6, // Adjusts bar width
      barPercentage: 0.8, // Adjusts bar width
      tension: 0.4,
      pointRadius: 5,
      pointHoverRadius: 10,
    },
  ],
};

const optionsGeneralResults = {
  hover: {
    animationDuration: 0,
  },
  animation: {
    duration: 3000,
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display: true,
      },
      border: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
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
      display: true,
      position: "bottom",
      align: "start",
      fullSize: true,
      labels: {
        generateLabels: function (chart) {
          return [
            {
              text: "Up",
              fillStyle: darkBlue,
              strokeStyle: darkBlue,
            },
            {
              text: "Down",
              fillStyle: lightBlue,
              strokeStyle: lightBlue,
            },
          ];
        },
      },
    },
  },
};

const ctxGeneralResults = document.getElementById("general-results").getContext("2d");
new Chart(ctxGeneralResults, {
  type: "bar",
  data: dataGeneralResults,
  options: optionsGeneralResults,
});
