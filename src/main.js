import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router/index'
import vuetify from './plugins/vuetify'
import PerfectScrollbar from 'vue2-perfect-scrollbar'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(PerfectScrollbar)

new Vue({
	router,
	vuetify,
	render: (h) => h(App)
}).$mount('#app')
