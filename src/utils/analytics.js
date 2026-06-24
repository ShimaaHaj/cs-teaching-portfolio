import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-ZPPBFXW2JT");
};

export const trackPageView = (path) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};