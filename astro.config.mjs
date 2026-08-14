// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://wiki.bharathrajiv.org',
	integrations: [
		starlight({
			title: 'Bharath Rajiv Wiki',
			description: "Bharath Rajiv A's engineering wiki for systems, AI, infrastructure, edge hardware, and architecture thinking.",
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/bharathrajiva' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/bharathrajiv' },
			],
			head: [
				{
					tag: 'script',
					attrs: { type: 'module' },
					content: `
						import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';

						mermaid.initialize({
							startOnLoad: false,
							theme: document.documentElement.dataset.theme === 'light' ? 'neutral' : 'dark',
							securityLevel: 'strict'
						});

						const renderMermaidBlocks = async () => {
							const blocks = document.querySelectorAll('pre[data-language="mermaid"]');
							for (const block of blocks) {
								const wrapper = block.closest('.expressive-code') ?? block;
								const code = wrapper.querySelector('button[data-code]')?.dataset.code?.replaceAll('\\u007f', '\\n') ?? block.textContent;
								const target = document.createElement('div');
								target.className = 'mermaid-diagram';
								target.textContent = code.trim();
								wrapper.replaceWith(target);
							}
							if (blocks.length) await mermaid.run({ querySelector: '.mermaid-diagram' });
						};

						if (document.readyState === 'loading') {
							document.addEventListener('DOMContentLoaded', renderMermaidBlocks, { once: true });
						} else {
							renderMermaidBlocks();
						}
					`,
				},
			],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Engineering Nexus', slug: 'engineeringnexus/about' },
						{ label: 'Knowledge Map', slug: 'engineeringnexus/knowledge-map' },
						{ label: 'Content System', slug: 'engineeringnexus/content-system' },
					],
				},
				{
					label: 'Engineering Tracks',
					items: [
						{ label: 'AI Architecture', slug: 'engineeringnexus/ai-architecture' },
						{ label: 'Platform Engineering', slug: 'engineeringnexus/platform-engineering' },
						{ label: 'Hardware + Edge', slug: 'engineeringnexus/hardware-edge' },
						{ label: 'Problem Solving', slug: 'engineeringnexus/problem-solving' },
						{ label: 'CAT Quant Cheat Sheet', slug: 'engineeringnexus/cat-quant-cheat-sheet' },
						{ label: 'Build Logs', slug: 'engineeringnexus/build-logs' },
					],
				},
				{
					label: 'Visual Systems',
					items: [
						{ label: 'Visual Lab', slug: 'engineeringnexus/visual-lab' },
						{ label: 'Private Compute Cluster', slug: 'engineeringnexus/projects/private-compute-cluster' },
					],
				},
			],
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
