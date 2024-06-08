/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/flowbite/**/*.js"
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
			  },
			  animation: {
				ripple: "ripple 3400ms ease infinite",
				shimmer: "shimmer 8s infinite",
				"border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
			  },
			  keyframes: {
				ripple: {
				  "0%, 100%": {
					transform: "translate(-50%, -50%) scale(1)",
				  },
				  "50%": {
					transform: "translate(-50%, -50%) scale(0.9)",
				  },
				},
				shimmer: {
					"0%, 90%, 100%": {
					  "background-position": "calc(-100% - var(--shimmer-width)) 0",
					},
					"30%, 60%": {
					  "background-position": "calc(100% + var(--shimmer-width)) 0",
					},
				},
				"border-beam":{
					"100%": {
						"offset-distance": "100%",
					},
				},
			},
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
