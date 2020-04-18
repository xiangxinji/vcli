import Vue from "vue";
import App from "./App.vue";

import env from "@env";
console.log(env);

new Vue({
  render: (h) => h(App),
}).$mount("#vue-app");
