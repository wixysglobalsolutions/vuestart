<template>
	<div>
		<ul>
			<li><router-link :to="'/' + $i18n.locale">{{ $t('menu.home') }}</router-link></li>
			<li><router-link :to="'/' + $i18n.locale + '/' + $t('url.aboutus')">{{ $t('menu.aboutus') }}</router-link></li>
			<li><router-link :to="'/' + $i18n.locale + '/' + $t('url.services')">{{ $t('menu.services') }}</router-link></li>
			<li><router-link :to="'/' + $i18n.locale + '/' + $t('url.products')">{{ $t('menu.products') }}</router-link></li>
			<li><router-link :to="'/' + $i18n.locale + '/' + $t('url.blog')">{{ $t('menu.blog') }}</router-link></li>
			<li><router-link :to="'/' + $i18n.locale + '/' + $t('url.faq')">{{ $t('menu.faq') }}</router-link></li>
		</ul>
		<select v-model="$i18n.locale">
			<option value="es">ES</option>
			<option value="en">EN</option>
		</select>
	</div>
</template>
