import utils from '../../utils';

/* -------------------------------------------------------------------------- */
/*                            Chart Real Timer user                           */
/* -------------------------------------------------------------------------- */
const chartRealTimeUserInit = () => {
  const realTimeUser = document.getElementById('real-time-user');
  if (realTimeUser) {
    const realTimeUserChart = utils.newChart(realTimeUser, {
      type: 'bar',
      data: {
        labels: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
        ],
        datasets: [
          {
            label: 'Users',
            backgroundColor: utils.rgbaColor('#fff', 0.3),
            data: [
              183,
              163,
              176,
              172,
              166,
              161,
              164,
              159,
              172,
              173,
              184,
              163,
              99,
              173,
              183,
              167,
              160,
              183,
              163,
              176,
              172,
              166,
              173,
              188,
              175,
            ],
            barPercentage: 0.9,
            categoryPercentage: 1.0,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              display: false,
              stacked: true,
            },
          ],
          xAxes: [
            {
              stacked: false,
              ticks: {
                display: false,
              },
              gridLines: {
                color: utils.rgbaColor('#fff', 0.1),
                display: false,
              },
            },
          ],
        },
      },
    });
    const userCounterDom = document.querySelector('.real-time-user');
    setInterval(() => {
      const userCounter = Math.floor(Math.random() * (120 - 60) + 60);
      /*-----------------------------------------------
     |   Remove data
     -----------------------------------------------*/
      realTimeUserChart.data.datasets.forEach((dataset) => {
        dataset.data.shift();
      });
      realTimeUserChart.update();

      /*-----------------------------------------------
      |   Add data
      -----------------------------------------------*/
      setTimeout(() => {
        realTimeUserChart.data.datasets.forEach((dataset) => {
          dataset.data.push(userCounter);
        });
        realTimeUserChart.update();
        if (userCounterDom) {
          userCounterDom.innerHTML = userCounter;
        }
      }, 500);
    }, 2000);

  }
};

export default chartRealTimeUserInit;
