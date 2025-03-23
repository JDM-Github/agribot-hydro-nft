<script lang="ts">
	import { onMount } from 'svelte';

	let StepEmbed: any;
	let isLoaded = false;

	onMount(async () => {
		StepEmbed = (await import('$lib/components/StepEmbed.svelte')).default;
		isLoaded = true;
	});
</script>

<section
	class="animate-section bg-gradient-to-b from-green-400 to-green-700 py-10 lg:py-20 dark:from-green-800 dark:to-green-900"
>
	<div class="container mx-auto max-w-6xl px-6 text-center">
		<h2
			class="text-2xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl lg:text-3xl dark:text-gray-100"
		>
			Meet Our Technology
		</h2>
		<p class="mx-auto mt-4 max-w-2xl text-sm text-white sm:text-base dark:text-gray-300">
			Discover how our innovative tools transform your greenhouse into a smart, self-monitoring
			environment.
		</p>

		<div class="mx-auto mt-10 h-[500px] w-full">
			{#if isLoaded}
				<svelte:component this={StepEmbed} />
			{:else}
				<p class="text-white dark:text-gray-400">Loading...</p>
			{/if}
		</div>
	</div>
</section>
