import utils from "../../utils";

/* -------------------------------------------------------------------------- */
/*                                 Line Chart                                 */
/* -------------------------------------------------------------------------- */

const chartLinePaymentInit = () => {
  /*-----------------------------------------------
  |   Helper functions and Data
  -----------------------------------------------*/
  const chartData = [
    3,
    1,
    4,
    1,
    5,
    9,
    2,
    6,
    5,
    3,
    5,
    8,
    9,
    7,
    9,
    3,
    2,
    3,
    8,
    4,
    6,
    2,
    6,
    4,
    3,
    3,
    8,
    3,
    2,
    7,
    9,
    5,
    0,
    2,
    8,
    8,
    4,
    1,
    9,
    7,
  ];
  const labels = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
  ];

  /*-----------------------------------------------
  |   Line Chart
  -----------------------------------------------*/
  const chartLine = document.getElementById("chart-line");

  if (chartLine) {
    const getChartBackground = (chart) => {
      
      const isFluid = utils.getItemFromStore("isFluid");
      isFluid && chartLine.setAttribute('height', 275);

      const ctx = chart.getContext("2d");
      if (localStorage.getItem("theme") === "light") {
        const gradientFill = ctx.createLinearGradient(0, 0, 0, 250);
        gradientFill.addColorStop(0, "rgba(255, 255, 255, 0.3)");
        gradientFill.addColorStop(1, "rgba(255, 255, 255, 0)");
        return gradientFill;
      } else {
        const gradientFill = ctx.createLinearGradient(
          0,
          0,
          0,
          ctx.canvas.height
        );
        gradientFill.addColorStop(
          0,
          utils.rgbaColor(utils.getColors().primary, 0.5)
        );
        gradientFill.addColorStop(1, "transparent");
        return gradientFill;
      }
    };

    const dashboardLineChart = utils.newChart(chartLine, {
      type: "line",
      data: {
        labels: labels.map((label) => label.substring(0, label.length - 3)),
        datasets: [
          {
            borderWidth: 2,
            data: chartData.map((d) => (d * 3.14).toFixed(2)),
            borderColor:
              localStorage.getItem("theme") === "dark"
                ? utils.getColors().primary
                : utils.settings.chart.borderColor,
            backgroundColor: getChartBackground(chartLine),
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        tooltips: {
          mode: "x-axis",
          xPadding: 20,
          yPadding: 10,
          displayColors: false,
          callbacks: {
            label: (tooltipItem) =>
              `${labels[tooltipItem.index]} - ${tooltipItem.yLabel} USD`,
            title: () => null,
          },
        },
        hover: { mode: "label" },
        scales: {
          xAxes: [
            {
              scaleLabel: {
                show: true,
                labelString: "Month",
              },
              ticks: {
                fontColor: utils.rgbaColor("#fff", 0.7),
                fontStyle: 600,
              },
              gridLines: {
                color: utils.rgbaColor("#fff", 0.1),
                zeroLineColor: utils.rgbaColor("#fff", 0.1),
                lineWidth: 1,
              },
            },
          ],
          yAxes: [{ display: false }],
        },
      },
    });

    document
      .querySelector("#dashboard-chart-select")
      ?.addEventListener("change", (e) => {
        const LineDB = {
          all: [4, 1, 6, 2, 7, 12, 4, 6, 5, 4, 5, 10].map((d) =>
            (d * 3.14).toFixed(2)
          ),
          successful: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8].map((d) =>
            (d * 3.14).toFixed(2)
          ),
          failed: [1, 0, 2, 1, 2, 1, 1, 0, 0, 1, 0, 2].map((d) =>
            (d * 3.14).toFixed(2)
          ),
        };
        dashboardLineChart.data.datasets[0].data = LineDB[e.target.value];
        dashboardLineChart.update();
      });
    // change chart color on theme change
    const changeChartThemeColor = (borderColor) => {
      dashboardLineChart.data.datasets[0].borderColor = borderColor;
      dashboardLineChart.data.datasets[0].backgroundColor = getChartBackground(
        chartLine
      );

      dashboardLineChart.update();
    };

    // event trigger
    const themeController = document.body;

    themeController.addEventListener(
      "clickControl",
      ({ detail: { control, value } }) => {
        if (control === "theme") {
          if (value === "dark") {
            changeChartThemeColor(utils.getColors().primary);
          } else {
            changeChartThemeColor(utils.settings.chart.borderColor);
          }
        }
      }
    );
  }
};

export default chartLinePaymentInit;
