import utils from '../../utils';
import { getPosition, echartSetOption } from './echarts-utils';

/* -------------------------------------------------------------------------- */
/*                                Traffic Channels                           */
/* -------------------------------------------------------------------------- */

const trafficChannelChartInit = () => {
  const $trafficChannels = document.querySelector('.echart-traffic-channels');

  if ($trafficChannels) {
    const userOptions = utils.getData($trafficChannels, 'options');
    const chart = window.echarts.init($trafficChannels);

    const tooltipFormatter = params => {
      return `
      <div>
        <p class='mb-2 text-600'>${window
          .dayjs(params[0].axisValue)
          .format('MMM DD, YYYY')}</p>
        <div class='ms-1'>
          <h6 class="fs--1 text-700"><span class="fas fa-circle me-2" style="color:${
            params[0].color
          }"></span>
            ${params[0].seriesName} : ${params[0].value}
          </h6>
          <h6 class="fs--1 text-700"><span class="fas fa-circle me-2" style="color:${
            params[1].color
          }"></span>
            ${params[1].seriesName} : ${params[1].value}
          </h6>
          <h6 class="fs--1 text-700"><span class="fas fa-circle me-2" style="color:${
            params[2].color
          }"></span>
            ${params[2].seriesName} : ${params[2].value}
          </h6>
          <h6 class="fs--1 text-700"><span class="fas fa-circle me-2" style="color:${
            params[3].color
          }"></span>
            ${params[3].seriesName} : ${params[3].value}
          </h6>
          <h6 class="fs--1 text-700"><span class="fas fa-circle me-2" style="color:${
            params[4].color
          }"></span>
            ${params[4].seriesName} : ${params[4].value}
          </h6>
        </div>
      </div>
      `;
    };

    const getDefaultOptions = () => ({
      color: [
        utils.getColors().primary,
        utils.rgbaColor(utils.getColors().primary, 0.8),
        utils.rgbaColor(utils.getColors().primary, 0.6),
        utils.rgbaColor(utils.getColors().primary, 0.4),
        utils.rgbaColor(utils.getColors().primary, 0.2),
      ],
      legend: {
        data: ['Display', 'Direct', 'Organic Search', 'Paid Search', 'Other'],
        left: 5,
        // bottom: 10,
        itemWidth: 10,
        itemHeight: 10,
        borderRadius: 0,
        icon: 'circle',
        inactiveColor: utils.getGrays()['400'],
        textStyle: { color: utils.getGrays()['700'] },
        itemGap: 20,
      },
      xAxis: {
        type: 'category',
        data: utils
          .getPastDates(7)
          .map(date => window.dayjs(date).format('DD MMM, YYYY')),
        axisLine: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: utils.getGrays()['200'],
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: utils.getGrays()['600'],
          formatter: value => window.dayjs(value).format('ddd'),
        },
      },
      yAxis: {
        type: 'value',
        position: 'right',
        splitLine: {
          lineStyle: {
            color: utils.getGrays()['200'],
          },
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: true,
          color: utils.getGrays()['600'],
          margin: 15,
        },
      },
      tooltip: {
        trigger: 'axis',
        padding: [7, 10],
        axisPointer: {
          type: 'none',
        },
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        transitionDuration: 0,
        position(pos, params, dom, rect, size) {
          return getPosition(pos, params, dom, rect, size);
        },
        formatter: tooltipFormatter,
      },

      series: [
        {
          name: 'Display',
          type: 'bar',
          stack: 'total',
          data: [320, 302, 301, 334, 390, 330, 320],
        },
        {
          name: 'Direct',
          type: 'bar',
          stack: 'total',
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: 'Organic Search',
          type: 'bar',
          stack: 'total',
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: 'Paid Search',
          type: 'bar',
          stack: 'total',
          data: [150, 212, 201, 154, 190, 330, 410],
        },
        {
          name: 'Other',
          type: 'bar',
          stack: 'total',
          data: [820, 832, 901, 934, 1290, 1330, 1320],
          itemStyle: {
            barBorderRadius: [5, 5, 0, 0],
          },
        },
      ],

      grid: {
        right: '50px',
        left: '0px',
        bottom: '10%',
        top: '15%',
      },
    });

    echartSetOption(chart, userOptions, getDefaultOptions);

    // utils.resize(() => {
    //   if (window.innerWidth < 520) {
    //     chart.setOption({
    //       grid: { right: '50px', left: '0px', bottom: '10%', top: '10%' },
    //     });
    //   } else {
    //     chart.setOption({
    //       grid: { right: '50px', left: '0px', bottom: '10%', top: '10%' },
    //     });
    //   }
    // });
  }
};

export default trafficChannelChartInit;
