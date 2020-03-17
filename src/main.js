import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import {getHttp, postHttp} from './utils/http'
Vue.prototype.$getHttp = getHttp
Vue.prototype.$postHttp = postHttp

// mint-ui
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css'; 


Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
