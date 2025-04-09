// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { ion } from "starlight-ion-theme";

export default defineConfig({
	site: 'https://wiki.bharathrajiv.org',
	integrations: [
		starlight({
			title: 'Wiki',
			description: "A wiki from the mind of Bharath Rajiv A",
			social: {
				github: 'https://github.com/bharathrajiva',
			},
			logo: {
				light: './src/assets/dark-site-logo.png',
				dark: './src/assets/light-site-logo.png',
				replacesTitle: true, // Hide the site title
			  },
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/styles.css',
			  ],
			  plugins: [
				ion()
			  ],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
