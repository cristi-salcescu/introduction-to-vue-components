import Vue from "vue"
import Vuex from "vuex"
import App from "./App.vue"

import Store from "./Store.js"

Vue.config.productionTip = false
Vue.use(Vuex);

var store = new Store();

new Vue({
  render: h => h(App),
  store
}).$mount('#app')

store.dispatch("reload_products");
