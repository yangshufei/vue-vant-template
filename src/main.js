import './styles/index.scss'
import 'amfe-flexible/index.js'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Loading from './components/loading'

Vue.use(Loading)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
