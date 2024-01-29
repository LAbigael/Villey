var e0 = ({ init }) => {
  init("app.after", (app) => {
    // console.log("app.after");
    // app.use(Vueform, vueformConfig);
  });
};

const hooks = [{name:'configure-vueform',config:e0}];const endpoints = [];const operations = [];

export { endpoints, hooks, operations };
