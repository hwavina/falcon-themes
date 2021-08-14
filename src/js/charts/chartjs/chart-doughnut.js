import utils from '../../utils';
import { chartJsDefaultTooltip, chartJsInit } from './chartjs-utils';


/* -------------------------------------------------------------------------- */
/*                            Chart Doughnut                                  */
/* -------------------------------------------------------------------------- */
const chartDoughnut = () => {
  const doughnut = document.getElementById('doughnut-chart');

  const getOptions = () => ({
    type: 'doughnut',
    data: {
      datasets: [{
        data: [5, 3, 2, 1, 1],
        backgroundColor: [
          utils.rgbaColor(utils.getColor('facebook'), 0.2),
          utils.rgbaColor(utils.getColor('youtube'), 0.2),
          utils.rgbaColor(utils.getColor('twitter'), 0.2),
          utils.rgbaColor(utils.getColor('linkedin'), 0.2),
          utils.rgbaColor(utils.getColor('github'), 0.2),
        ],
        borderWidth: 1,
        // borderColor:'black'
        borderColor: [
         utils.getColor('facebook'),
         utils.getColor('youtube'),
         utils.getColor('twitter'),
         utils.getColor('linkedin'),
         utils.getColor('github')
      ]
      }],

      labels: ['Facebook', 'Youtube', 'Twitter', 'Linkedin', 'GitHub']
    },
    options:{
      tooltips: chartJsDefaultTooltip(),
      legends:{
        display: true,
        generateLabels:function(){
          return {
            // And finally : 
            text: 'jjsj',
            // fillStyle: fill,
            strokeStyle: 'red',
            // lineWidth: bw,
            // hidden: isNaN(ds.data[i]) || meta.data[i].hidden,
            // index: i
          };
        }
      }
    }
  })

  chartJsInit(doughnut, getOptions);
};

export default chartDoughnut;
