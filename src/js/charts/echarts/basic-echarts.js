import utils from "../../utils";
import { getPosition, echartSetOption } from "./echarts-utils";


/* -------------------------------------------------------------------------- */
/*                     Echart Bar Member info                                 */
/* -------------------------------------------------------------------------- */

const basicEchartsInit = () => {
  const $echartBasicCharts = document.querySelectorAll("[data-echarts]");

  $echartBasicCharts.forEach(($echartBasicChart) => {
    const userOptions = utils.getData($echartBasicChart, "echarts");
    const chart = window.echarts.init($echartBasicChart);
    function getFormatter(params) {
      return `${params.value}`;
    }
    const getDefaultOptions = () => ({
      color: utils.getColors().primary,
      tooltip: {
        trigger: "item",
        padding: [7, 10],
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()["300"],
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        formatter(params) {
          return getFormatter(params);
        },
        transitionDuration: 0,
        position(pos, params, dom, rect, size) {
          return getPosition(pos, params, dom, rect, size);
        },
      },
      xAxis: {
        type: "category",
        show: false,
      },
      yAxis: {
        show: false,
        type: "value",
      },
      series: [
        {
          type: "bar",
          symbol: 'none',
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: utils.rgbaColor(utils.getColor('primary'), 0.25),
                 
                },
                {
                  offset: 1,
                  color: utils.rgbaColor(utils.getColor('primary'), 0),
                },
              ],
            },
          },
        },
      ],
      grid: { right: "0", left: "0", bottom: "0", top: "0" },
    });
    echartSetOption(chart, userOptions, getDefaultOptions);
  });
};

export default basicEchartsInit;
