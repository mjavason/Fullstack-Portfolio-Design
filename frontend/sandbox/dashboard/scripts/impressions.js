// Circular Gauge Chart Implementation
const gaugeValue = 75; // Adjust this value dynamically if needed
const ctxImpressions = document.getElementById("impressions").getContext("2d");

new Chart(ctxImpressions, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [gaugeValue, 100 - gaugeValue], // Gauge value and remaining part
        backgroundColor: [darkBlue, lightBlue], // Gauge color and faded background
        borderWidth: 0,
        cutout: "80%", // Adjust thickness
      },
    ],
  },
  options: {
    rotation: 0, // Starts at top
    circumference: 360, // Full circle
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
                text: "Male",
                fillStyle: darkBlue,
                strokeStyle: darkBlue,
              },
              {
                text: "Female",
                fillStyle: lightBlue,
                strokeStyle: lightBlue,
              },
            ];
          },
        },
      },
    },
  },
  plugins: [
    {
      id: "centerText",
      beforeDraw: (chart) => {
        const ctx = chart.ctx;
        const { width } = chart;
        const centerX = chart.getDatasetMeta(0).data[0].x;
        const centerY = chart.getDatasetMeta(0).data[0].y;

        ctx.save();
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = `${width / 12}px Arial`;
        ctx.fillText("126k", centerX, centerY - 10); // First line
        ctx.font = `${width / 20}px Arial`;
        ctx.fillText("Impressions", centerX, centerY + 15); // Second line
        ctx.restore();
      },
    },
  ],
});
