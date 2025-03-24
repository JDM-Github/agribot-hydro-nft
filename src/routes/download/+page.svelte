<script lang="ts">
	import { goto } from '$app/navigation';
	import Footer from '$lib/components/Footer.svelte';
	const downloadLink = 'https://example.com/download';

	function downloadApp() {
		window.location.href = downloadLink;
	}
</script>

<main>
	<div class="relative flex h-[calc(100vh-95px)] flex-col">
		<section class="relative flex flex-1 flex-col lg:flex-row">
			<div
				class="flex w-full flex-col items-center justify-center bg-gradient-to-br from-green-400 via-green-500 to-teal-500
        p-6 text-gray-900 before:absolute before:inset-0 before:bg-[url('/Texture/texture1.png')]
        before:bg-cover before:bg-center before:opacity-5 sm:p-8
        lg:w-1/2 dark:bg-gradient-to-br dark:from-green-700
        dark:via-green-800 dark:to-teal-700 dark:text-white"
			>
				<img
					src="/LOGO TEXT.webp"
					alt="App Logo"
					class="mb-3 h-28 object-contain drop-shadow-lg lg:h-48"
				/>

				<h1 class="mb-2 text-center text-2xl font-bold sm:text-3xl">Download Our App</h1>

				<p class="mb-4 text-center text-base text-gray-900 sm:text-lg dark:text-gray-300">
					Get the best experience by installing our application.
				</p>

				<div class="flex w-full flex-col items-center space-y-2 sm:w-3/4">
					<button
						class="z-10 w-full rounded-lg bg-green-600 px-4 py-2 text-base text-white shadow-lg transition-transform hover:scale-105 hover:bg-green-700 sm:text-lg md:w-3/4"
					>
						Download for Windows
					</button>

					<button
						class="z-10 w-full rounded-lg bg-teal-500 px-4 py-2 text-base text-white shadow-lg transition-transform hover:scale-105 hover:bg-teal-600 sm:text-lg md:w-3/4"
					>
						Download APK (Android)
					</button>
				</div>
			</div>

			<div
				class="relative flex h-full w-full flex-col items-center justify-center bg-white p-6
                before:absolute before:inset-0 before:bg-[url('/Texture/texture2.png')] before:bg-cover before:bg-center
                before:opacity-10 sm:p-8 lg:w-1/2 dark:bg-gray-900"
			>
				<div class="relative z-10 mb-4 flex items-center space-x-4">
					<img src="/LOGO.ico" alt="App Logo" class="mb-4 h-20 w-auto sm:h-28" />
					<a href="https://github.com/JDM-Github/agribot-hydro-nft.git" target="_blank" rel="noopener noreferrer" aria-label="Github">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
							class="h-28 w-28 text-gray-800 transition-transform hover:scale-110 dark:text-gray-300"
						>
							<path
								fill-rule="evenodd"
								d="M12 .296C5.372.296 0 5.668 0 12.296c0 5.302 3.438 9.8 8.207 11.385.6.111.793-.26.793-.577v-2.217c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.091-.745.082-.73.082-.73 1.206.085 1.841 1.24 1.841 1.24 1.07 1.835 2.807 1.305 3.492.998.108-.775.42-1.305.762-1.605-2.665-.303-5.467-1.334-5.467-5.934 0-1.31.468-2.382 1.237-3.222-.124-.303-.536-1.525.116-3.177 0 0 1.008-.322 3.3 1.231a11.55 11.55 0 0 1 3.002-.404c1.019.005 2.046.138 3.002.404 2.291-1.553 3.296-1.231 3.296-1.231.652 1.652.24 2.874.116 3.177.769.84 1.237 1.912 1.237 3.222 0 4.612-2.807 5.627-5.479 5.922.432.372.816 1.103.816 2.222v3.293c0 .32.192.694.8.576 4.765-1.583 8.2-6.08 8.2-11.383 0-6.628-5.372-12-12-12Z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
				</div>

				<h1
					class="text-center text-2xl font-bold tracking-wide text-gray-800 sm:text-3xl dark:text-white"
				>
					Use Web Version
				</h1>

				<p class="mb-4 text-center text-base text-gray-700 sm:text-lg dark:text-gray-300">
					Or continue using our web version right in your browser.
				</p>

				<a
					href="https://agribot-studio.netlify.app"
					target="_blank"
					class="z-10 w-full cursor-pointer rounded-lg bg-green-500 dark:bg-green-500/50 px-4 py-2 text-base text-white shadow-lg transition-transform hover:bg-green-700 dark:hover:bg-green-700/50 sm:text-lg md:w-3/4 text-center"
				>
					Use Web Version
				</a>
			</div>
		</section>
	</div>

	<Footer />
</main>
