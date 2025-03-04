// Circular Gauge Chart Implementation
const gaugeValue = 75; // Adjust this value dynamically if needed
const ctxImpressions = document.getElementById("impressions").getContext("2d");
new Chart(ctxImpressions, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [gaugeValue, 100 - gaugeValue], // Gauge value and remaining part
        backgroundColor: [darkBlue, "rgba(200, 200, 200, 0.3)"], // Gauge color and faded background
        borderWidth: 0,
        cutout: "80%", // Adjust thickness
      },
    ],
  },
  options: {
    rotation: -90, // Starts at top
    circumference: 180, // Makes it a semi-circle
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
