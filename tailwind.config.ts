import type { Config } from 'tailwindcss'

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
				}
			}
		}
	},

	plugins: []
} satisfies Config
