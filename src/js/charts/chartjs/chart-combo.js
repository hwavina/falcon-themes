import utils from '../../utils';
import { chartJsDefaultTooltip, chartJsInit } from './chartjs-utils';


/* -------------------------------------------------------------------------- */
/*                            Chart Combo                                  */
/* -------------------------------------------------------------------------- */
const chartCombo = () => {
  const combo = document.getElementById('combo-chart');

  const getOptions = () => ({
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          type: 'line',
          label: 'Dataset 1',
          borderColor: utils.getColor('primary'),
          borderWidth: 2,
          fill: false,
          data: [55,80,-60,-22,-50,40,90]
        }, {
          type: 'bar',
          label: 'Dataset 2',
          backgroundColor: utils.getSoftColors()['danger'],
          data: [4,-80,90,-22,70,35,-50],
          borderWidth: 1
        }, {
          type: 'bar',
          label: 'Dataset 3',
          backgroundColor: utils.getSoftColors()['primary'],
          data: [-30,30,-18,100,-45,-25,-50],
          borderWidth: 1
        }
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
    }
  })

  chartJsInit(combo, getOptions);
};

export default chartCombo;
