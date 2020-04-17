import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

async function init() {
  const res = await fetch("https://mhw-db.com/decorations")
  const skillData = await res.json();

  console.log(skillData);

  Vue.config.productionTip = false;

  new Vue({
    router,
    render: h => h(App)
  }).$mount("#app");
}

init();