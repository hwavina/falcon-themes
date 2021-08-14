/* -------------------------------------------------------------------------- */
/*                           Navbar vertical config                           */
/* -------------------------------------------------------------------------- */
const urlParams = new URLSearchParams(window.location.search);
const CONFIG = {
  isNavbarVerticalCollapsed:
    urlParams.get("isNavbarVerticalCollapsed") || false,
  theme: urlParams.get("theme") || "light", // window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
  isRTL: urlParams.get("isRTL") || false,
  isFluid: urlParams.get("isFluid") || false,
  navbarStyle: urlParams.get("navbarStyle") || "transparent",
  navbarPosition: urlParams.get("navbarPosition") || "vertical",
};

Object.keys(CONFIG).forEach((key) => {
  if (urlParams.get(key) || localStorage.getItem(key) === null) {
    localStorage.setItem(key, CONFIG[key]);
  }
});

if (!!JSON.parse(localStorage.getItem("isNavbarVerticalCollapsed"))) {
  document.documentElement.classList.add("navbar-vertical-collapsed");
}

if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
}
