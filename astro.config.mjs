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
			  
			  tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 2 },
			sidebar: [
				{
					// Link group title
					label: 'Getting Started',
					// Directory of an autogenerate a group of links
					autogenerate: { directory: 'getting-started' },
				  },
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
				{ label: 'Spaceships and Rockets', link: 'https://www.nasa.gov/humans-in-space/spaceships-and-rockets/' }, // An external link to the NASA website.
				{ label: 'Space Movie', link: 'https://en.wikipedia.org/wiki/Interstellar_(film)' },
				
			],
		}),
	],
});
