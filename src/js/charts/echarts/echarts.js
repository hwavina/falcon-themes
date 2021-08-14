import utils from "../../utils";

const resizeEcharts = () => {
  const $echarts = document.querySelectorAll("[data-echart-responsive]");
  if (!!$echarts.length) {
    $echarts.forEach((item) => {
      if (!!utils.getData(item, "echart-responsive")) {
        if(!(item.closest('.tab-pane') && window.getComputedStyle(item.closest('.tab-pane')).display === 'none')){
          window.echarts.init(item).resize();
        }
      }
    });
  }
};

utils.resize(() => resizeEcharts());

const navbarVerticalToggle = document.querySelector(".navbar-vertical-toggle");
navbarVerticalToggle &&
  navbarVerticalToggle.addEventListener("navbar.vertical.toggle", () =>
    resizeEcharts()
  );