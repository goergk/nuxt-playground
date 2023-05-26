// @ts-nocheck
import { defineNuxtModule } from '@nuxt/kit'
import { resolve, join } from 'pathe'
import type { Nuxt } from '@nuxt/schema'

export default defineNuxtModule({
	name: 'showcaseModule',
	configKey: 'showcaseModule',
	setup(options: any, nuxt: Nuxt) {
		// Auto register components
		nuxt.hook('components:dirs', (dirs) => {
			dirs.push({
				path: join(__dirname, 'components'),
			})
		})

		// Auto register composables
		nuxt.hook('autoImports:dirs', (dirs) => {
			dirs.push(resolve(__dirname, './composables'))
		})

		// Auto register pages
		nuxt.hook('pages:extend', (pages) => {
			pages.push(
				{
					name: 'showcasePage',
					path: '/showcase',
					file: resolve(__dirname, './pages/showcase.vue'),
				},
				{
					name: 'showcaseAdminPage',
					path: '/admin',
					file: resolve(__dirname, './pages/admin.vue'),
				}
			)
		})

		// Pinia store modules are auto imported
	},
})
