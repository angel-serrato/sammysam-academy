// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://angel-serrato.github.io/sammysam-academy',
	base: '/sammysam-academy/',
	integrations: [mdx(), sitemap()],
});
