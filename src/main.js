// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
//-- Packages lang
import Lang from './packages/lang/Lang.js'
import en from './packages/lang/languages/en'
import es from './packages/lang/languages/es'
import de from './packages/lang/languages/de'

//-- Config VueI18n to language
const locale = 'es'
const locales = ['es', 'en', 'de']

Vue.use(Lang)

Vue.use(VueI18n)
export const i18n = new VueI18n({
	messages: {
		en: en,
		es: es,
		de: de,
	}
})

//-- Navigation Guards
router.beforeEach(
	(to, from, next) => {
		window.scrollTo(0, 0)

		let language = to.params.lang;

		if(!language) {
			language = Vue.lang.getLang()
		} else {
			let inside = locales.find(function(locale) {
				return locale === language
			})

			if(!inside) {
				language = 'es'
			}
		}

		Vue.lang.setLang(language)
		i18n.locale = language

		if(!to.matched.length) {
			console.log('No matched! redirect...')
			next({
				path: '/' + language
			})
		}

		if(to.meta.title) {
			document.title = to.meta.title
		}
	next()
	}
)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>',
	i18n,
	watch: {
		'$i18n.locale': function (locale) {
			Vue.lang.setLang(locale)
			this.$router.push('/' + locale)
		}
	}
})
