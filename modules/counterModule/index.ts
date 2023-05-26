// @ts-nocheck
import { defineNuxtModule } from '@nuxt/kit'
import { resolve, join } from 'pathe'
import type { Nuxt } from '@nuxt/schema'

export default defineNuxtModule({
	name: 'counterModule',
	configKey: 'counterModule',
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
					name: 'indexPage',
					path: '/',
					file: resolve(__dirname, './pages/index.vue'),
				},
				{
					name: 'counterPage',
					path: '/counter',
					file: resolve(__dirname, './pages/counter.vue'),
				},
				{
					name: 'counterPageID',
					path: '/counter/:id',
					file: resolve(__dirname, './pages/[id]/index.vue'),
				}
			)
		})

		// Pinia store modules are auto imported
	},
})
