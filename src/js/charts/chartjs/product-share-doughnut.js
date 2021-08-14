import utils from '../../utils';
import { chartJsDefaultTooltip, chartJsInit } from './chartjs-utils';

/* -------------------------------------------------------------------------- */
/*                            Chart Scatter                                   */
/* -------------------------------------------------------------------------- */
const productShareDoughnutInit = () => {
  const marketShareDoughnutElement = document.getElementById("marketShareDoughnut");

  const getOptions = () => ({
    type: 'doughnut',
    data: {
      labels: ["Flacon","Sparrow"],
      datasets: [{
        data: [50, 88],
        backgroundColor: [
          utils.getColor('primary'),
          utils.getColor('300'),
        ],
        borderColor: [
          utils.getColor('primary'),
          utils.getColor('300'),
        ],
     }]
    },
    options: {
      tooltips: chartJsDefaultTooltip(),
      rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        legend: {
            display: false
        },
     
      cutoutPercentage: 80
    }
  });

  chartJsInit(marketShareDoughnutElement, getOptions);
};

export default productShareDoughnutInit;
