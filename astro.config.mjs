// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://wiki.kayri.net',
	integrations: [
		starlight({
			title: 'Kayri Ranch',
			description: 'Player wiki for the Kayri Ranch Cobblemon server.',
			logo: {
				src: './src/assets/logo.png',
				replacesTitle: false,
			},
			favicon: '/favicon.png',
			head: [
				{
					tag: 'meta',
					attrs: { name: 'robots', content: 'noindex, nofollow' },
				},
			],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Fett32/kayri-wiki' },
			],
			sidebar: [
				{
					label: 'Getting Started',
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'Pokémon & Combat',
					autogenerate: { directory: 'pokemon' },
				},
				{
					label: 'Base & Automation',
					autogenerate: { directory: 'base' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Community',
					autogenerate: { directory: 'community' },
					collapsed: true,
				},
			],
		}),
	],
});
