import utils from '../../utils';
import { chartJsDefaultTooltip, chartJsInit } from './chartjs-utils';

/* -------------------------------------------------------------------------- */
/*                                  bar-chart                                 */
/* -------------------------------------------------------------------------- */

const barChartInit = () => {
  const barChartElement = document.getElementById("chart-bar");

  const getOptions = () => ({
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 6, 3],
          backgroundColor: [
            utils.rgbaColor(utils.getColor('secondary'), .2),
            utils.rgbaColor(utils.getColor('warning'), .2),
            utils.rgbaColor(utils.getColor('info'), .2),
            utils.rgbaColor(utils.getColor('success'), .2),
            utils.rgbaColor(utils.getColor('info'), .2),
            utils.rgbaColor(utils.getColor('primary'), .2),
          ],
          borderColor: [
            
            utils.getColor('secondary'),
            utils.getColor('warning'),
            utils.getColor('info'),
            utils.getColor('success'),
            utils.getColor('info'),
            utils.getColor('primary'),
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {

      tooltips: chartJsDefaultTooltip(),
      scales: {
        xAxes: [{
          gridLines: {
            zeroLineColor: utils.rgbaColor(utils.getGrays()['black'], .2),
            color: utils.rgbaColor(utils.getGrays()['black'], .1),
            titleFontColor: utils.getColors().dark,
            bodyFontColor: utils.getColors().dark,
          },
        }],
        yAxes: [{
          gridLines: {
            zeroLineColor: utils.rgbaColor(utils.getGrays()['black'], .2),
            color: utils.rgbaColor(utils.getGrays()['black'], .1),
          },
        }],
      },
    },
  })

  chartJsInit(barChartElement, getOptions);


};

export default barChartInit;



