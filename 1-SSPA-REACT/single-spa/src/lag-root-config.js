import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@lag/react-single",
  app: () =>
    System.import("@lag/react-single"),
  activeWhen: ["/react-single"],
});

registerApplication({
  name: "@lag/navbar",
  app: () => System.import("@lag/navbar"),
  activeWhen: ()=>true
});

start({
  urlRerouteOnly: true,
});
