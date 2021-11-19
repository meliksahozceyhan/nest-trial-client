import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import en from 'vuetify/es5/locale/en'
import tr from 'vuetify/es5/locale/tr'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

Vue.use(Vuetify)

export default new Vuetify({
	icons: {
		iconfont: 'mdi'
	},
	lang: {
		locales: { tr, en },
		current: 'tr'
	}
})
