/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
			  },
			  animation: {
				ripple: "ripple 3400ms ease infinite",
				shimmer: "shimmer 8s infinite",
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
			},
		},
	},
	plugins: [],
}
