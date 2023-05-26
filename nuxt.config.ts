// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// modules: ['@invictus.codes/nuxt-vuetify'],
	modules: ['@pinia/nuxt', '~/modules/counterModule/index', '~/modules/showcaseModule/index'],
	imports: {
		dirs: ['composables/**'],
	},
	css: ['vuetify/lib/styles/main.sass'],
	build: {
		transpile: ['vuetify'],
	},
	vite: {
		define: {
			'process.env.DEBUG': false,
		},
	},
})
