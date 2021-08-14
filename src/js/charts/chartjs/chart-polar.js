import utils from '../../utils';
import { chartJsDefaultTooltip, chartJsInit } from './chartjs-utils';

/* -------------------------------------------------------------------------- */
/*                            Chart Polar                                  */
/* -------------------------------------------------------------------------- */
const chartPolar = () => {
  const polar = document.getElementById('polar-chart');

  const getOptions = () => ({
    type: 'polarArea',
    data: {
      datasets: [{
        data: [10, 20, 50, 40, 30],
        backgroundColor: [
          utils.rgbaColor(utils.getColor('facebook'), 0.5),
          utils.rgbaColor(utils.getColor('youtube'), 0.5),
          utils.rgbaColor(utils.getColor('twitter'), .5),
          utils.rgbaColor(utils.getColor('linkedin'), .5),
          utils.rgbaColor(utils.getColor('success'), .5),
        ],
        borderWidth:1,
        borderColor:utils.getGrays()['400']
      }],

      labels: ['Facebook', 'Youtube', 'Twitter', 'Linkedin', 'Medium']
    },
    options: {
      tooltips: chartJsDefaultTooltip(),
      scale: {
        gridLines: {
          color: utils.rgbaColor(utils.getGrays()['black'], .1)
        }
      }
    }
  })

  chartJsInit(polar, getOptions);

};

export default chartPolar;
