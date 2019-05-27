import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

import VueRouter from "vue-router"
import Routes from './common/js/router.js'
import GeminiScrollbar from 'vue-gemini-scrollbar'

import './plugins/element.js'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(GeminiScrollbar)

const router = new VueRouter({
    linkActiveClass: 'active',
    routes: Routes,
    mode: "history"
})


new Vue({
  router,
  render: h => h(App),

}).$mount('#app')
