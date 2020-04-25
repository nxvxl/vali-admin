import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/** Import bootstrap and styles related modules */
import 'bootstrap/dist/js/bootstrap.bundle'
import '@/sass/main.scss'
import '@/assets/fonts/font-awesome-4.7.0/scss/font-awesome.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
