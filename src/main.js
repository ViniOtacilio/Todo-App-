import Vue from 'vue'
import App from './App'
import router from './router'

console.log('[i] Starting client app')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  components: { App }
}).$mount('#app')