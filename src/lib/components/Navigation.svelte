<script>
	import { page } from '$app/state';
	import { darkMode } from '$lib/stores/theme';

	let isMenuOpen = false;
	function toggleDarkMode() {
		darkMode.set(!$darkMode);
		localStorage.setItem('darkMode', `${$darkMode}`);
	}

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<nav
	class="min-h-[50px] max-h-[50px] fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-white p-4 shadow-md dark:bg-gray-900"
>
	<div class="flex items-center space-x-4">
		<img src="/LOGO.ico" class="h-8 w-8" alt="AGRI-BOT Logo" />
		<span
			class="text-lg font-bold text-gray-500 md:hidden lg:inline lg:text-2xl dark:text-gray-200"
		> 
			AGRI-BOT HYDRO NFT
		</span>
	</div>

	<ul class="hidden items-center space-x-6 md:flex">
		{#each [{ name: 'HOME', path: '/' }, { name: 'PLANTS', path: '/plants' }, { name: "DOWNLOAD", path: "/download"}, { name: 'ABOUT', path: '/about' }] as item}
			<li>
				<a
					href={item.path}
					class="font-medium hover:text-green-500 {page.route.id === item.path
						? 'font-bold text-green-600'
						: 'text-gray-800 dark:text-gray-300'}"
				>
					{item.name}
				</a>
			</li>
		{/each}
		<li>
			<button
				onclick={toggleDarkMode}
				class="rounded bg-gray-200 p-2 text-black dark:bg-gray-700 dark:text-white"
			>
				{$darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
			</button>
		</li>
	</ul>

	<button class="text-2xl text-gray-800 md:hidden dark:text-gray-200" onclick={toggleMenu}>
		{isMenuOpen ? '✖' : '☰'}
	</button>
</nav>

<div
	class={`fixed top-[49px] left-0 w-full transform border-t border-gray-300 bg-white shadow-md transition-transform duration-200 md:hidden dark:bg-gray-800 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-full opacity-0'} z-40`}
>
	<ul class="flex flex-col space-y-1 p-2 text-sm">
		{#each [{ name: 'HOME', path: '/' }, { name: 'PLANTS', path: '/plants' }, { name: 'ABOUT', path: '/about' }] as item}
			<li>
				<a
					href={item.path}
					onclick={closeMenu}
					class="block rounded-lg px-4 py-2 text-center transition duration-150 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700
                        {page.route.id === item.path
						? 'font-bold text-green-600'
						: 'text-gray-800 dark:text-gray-300'}"
				>
					{item.name}
				</a>
			</li>
		{/each}
		<li class="mt-2 flex justify-center">
			<button
				onclick={toggleDarkMode}
				class="flex items-center gap-2 rounded-lg bg-gray-200 px-4 py-2 text-black transition hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
			>
				{$darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
			</button>
		</li>	
	</ul>
</div>
