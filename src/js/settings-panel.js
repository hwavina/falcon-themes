import utils from "./utils";

/* -------------------------------------------------------------------------- */
/*                               Settings Panel                               */
/* -------------------------------------------------------------------------- */

const settingsPanelInit = () => {
  const modals = document.querySelectorAll(".modal-theme");
  let showModal = true;

  modals.forEach((item) => {
    const modal = new window.bootstrap.Modal(item);
    const options = {
      autoShow: false,
      autoShowDelay: 0,
      showOnce: false,
      ...utils.getData(item, "options"),
    };
    const { showOnce, autoShow, autoShowDelay } = options;
    if (showOnce) {
      const hasModal = utils.getCookie("modal");
      showModal = hasModal === null;
    }
    if (autoShow && showModal) {
      setTimeout(() => {
        modal.show();
      }, autoShowDelay);
    }

    item.addEventListener("hidden.bs.modal", function (e) {
      const el = e.currentTarget;
      const modalOptions = {
        cookieExpireTime: 7200000,
        showOnce: false,
        ...utils.getData(el, "options"),
      };
      modalOptions.showOnce &&
        utils.setCookie("modal", false, modalOptions.cookieExpireTime);
    });
  });
};

export default settingsPanelInit;
