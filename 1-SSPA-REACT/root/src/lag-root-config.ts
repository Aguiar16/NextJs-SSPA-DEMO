import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import<LifeCycles>(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@lag/navbar",
  app: () => System.import<LifeCycles>("@lag/navbar"),
  activeWhen: ()=> true,
});

start({
  urlRerouteOnly: true,
});
