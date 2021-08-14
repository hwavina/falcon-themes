import utils from '../../utils';
import { chartJsDefaultTooltip, chartJsInit } from './chartjs-utils';

/* -------------------------------------------------------------------------- */
/*                            Chart Radar                                  */
/* -------------------------------------------------------------------------- */
const chartRadar = () => {
  const radar = document.getElementById('radar-chart');

  const getOptions = () => ({
    type: 'radar',
    data: {
      labels: ["English", "Maths", "Physics", "Chemistry", "Biology", "History"],
      datasets: [
        {
        label: "Student A",
        backgroundColor: utils.rgbaColor(utils.getColor('success'), .5),
        data: [65, 75, 70, 80, 60, 80],
        borderWidth: 1
      }, 
      {
        label: "Student B",
        backgroundColor: utils.rgbaColor(utils.getColor('primary'), .5),
        data: [54, 65, 60, 70, 70, 75],
        borderWidth: 1
      }]
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

  chartJsInit(radar, getOptions);
};

export default chartRadar;
