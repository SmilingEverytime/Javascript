import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router/index.js'
import store from './vuex/index.js'
import AMap from 'vue-amap'
Vue.use(AMap)
// import "./sass/main.scss"


Vue.prototype.$http = axios;

Vue.config.productionTip = false


/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
AMap.initAMapApiLoader({
  key: '0f55a8defa30eb7c7316eae4a9adcc86',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
})
