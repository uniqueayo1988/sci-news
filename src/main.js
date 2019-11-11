import Vue from 'vue'
import VueParticles from 'vue-particles'
import Swimlane from 'vue-swimlane'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueParticles)
Vue.use(Swimlane)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
