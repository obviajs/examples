import { ChartCmp } from "../../components/ChartCmp/ChartCmp.js";

var myChart = new ChartCmp({
  id: "myChart",
  chartType: "bar", // Chart type can be 'bar', 'line', 'pie', etc.
  chartData: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  chartOptions: {
    responsive: true,
    maintainAspectRatio: false,
  },
  height: "400px",
});

myChart.on("endDraw", function () {
  console.log("Chart has finished rendering.");
  myChart.on("click", function (e) {
    console.log("Chart clicked!", e);
  });
});

myChart.render().then(function (cmpInstance) {
  $(document.body).append(cmpInstance.$el);
});

export { myChart };
