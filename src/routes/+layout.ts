import { get } from 'svelte/store';
import { darkMode } from '$lib/stores/theme';

export function load({ url }) {
	const records = [
		{ name: 'DASHBOARD', path: '/' },
		{ name: 'PLANTS', path: '/plants' },
		{ name: 'DOWNLOAD', path: '/download' },
		{ name: 'ABOUT', path: '/about' },
	];

	const currentPath = url.pathname;
	const isDarkMode = get(darkMode);

	const record = records.find((r) => r.path === currentPath);
	return {
		title: record ? `${record.name} | AGRI-BOT` : 'AGRI-BOT',
		description: 'This is a dynamic description for SEO.',
		isDarkMode
	};
}
