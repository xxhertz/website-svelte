import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss'

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			keyframes: {
				appear: {
					"0%": {
						opacity: "0"
					},
					"100%": {
						opacity: "1"
					}
				},
			},
			animation: {
				disappearingblink: "0.05s infinite alternate backwards appear"
			}
		}
	},

	plugins: []
} satisfies Config
