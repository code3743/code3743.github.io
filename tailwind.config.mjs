/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			container: {
				 screens: {
					 sm: '90vw',
					 md: '80vw',
					 lg: '648px',
					
				 }
			}
		},
	},
	plugins: [],
}
