export default function (Vue) {

	Vue.lang = {
		setLang (lang) {
			//-- destroy cookie
			document.cookie = 'lang=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
			var cookie = 'lang=' + lang + ';path=/'
			document.cookie = cookie
		},
		getLang () {
			var re = new RegExp("lang=([^;]+)")
			var value = re.exec(document.cookie);
			return (value != null) ? unescape(value[1]) : null;
		},
	}

	Object.defineProperties(Vue.prototype, {
		$lang: {
			get () {
				return Vue.lang;
			}
		}
	})
}