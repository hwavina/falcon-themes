import utils from "../../utils";

/* -------------------------------------------------------------------------- */
/*                            ChartJs Initialization                          */
/* -------------------------------------------------------------------------- */

const chartJsInit = (chartEl, config) => {
  if (!chartEl) return;

  const ctx = chartEl.getContext("2d");
  let chart = new window.Chart(ctx, config());

  const themeController = document.body;
  themeController.addEventListener(
    "clickControl",
    ({ detail: { control } }) => {
      if (control === "theme") {
        chart.destroy(config);
        return new window.Chart(ctx, config());
      }
      return null;
    }
  );

};

const chartJsDefaultTooltip = () => ({
  backgroundColor: utils.getGrays()['100'],
  borderColor: utils.getGrays()['300'],
  borderWidth: 1,
  titleFontColor:utils.getGrays()['black'],
  callbacks: {
    labelTextColor() {
      return utils.getGrays()['black'];
    }
  }
});

export default { chartJsDefaultTooltip, chartJsInit }