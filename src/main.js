import Vue from "vue";
import App from "./App.vue";

import config from "../env/index";
console.log(config);

new Vue({
  render: (h) => h(App),
}).$mount("#vue-app");

console.log(process.env.NODE_ENV);
