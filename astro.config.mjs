// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://wiki.bharathrajiv.org',
	integrations: [
		starlight({
			title: 'Wiki',
			description: "A wiki from the mind of Bharath Rajiv A",
			social: {
				github: 'https://github.com/bharathrajiva',
				linkedin: 'https://www.linkedin.com/in/bharathrajiv',
			},
			components: {
				Footer: './src/components/ConditionalFooter.astro',
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
			  
			  tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 2 }
		}),
	],
});
