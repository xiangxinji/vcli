import Vue from "vue";
import App from "./App.vue";

import logo from '@/assets/images/logo.gif'
import env from "@env";
console.log(logo);

new Vue({
  render: (h) => h(App),
}).$mount("#vue-app");



const ao = () => {
  
}