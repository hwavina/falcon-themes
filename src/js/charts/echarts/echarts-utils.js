const getPosition = (pos, params, dom, rect, size) => ({
  top: pos[1] - size.contentSize[1] - 10,
  left: pos[0] - size.contentSize[0] / 2,
});

const echartSetOption = (chart, userOptions, getDefaultOptions) => {
  const themeController = document.body;
  // Merge user options with lodash
  chart.setOption(window._.merge(getDefaultOptions(), userOptions));

  themeController.addEventListener(
    "clickControl",
    ({ detail: { control } }) => {
      if (control === "theme") {
        chart.setOption(window._.merge(getDefaultOptions(), userOptions));
      }
    }
  );
};

export default { getPosition, echartSetOption };
