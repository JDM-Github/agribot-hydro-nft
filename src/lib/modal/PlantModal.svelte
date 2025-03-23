<script lang="ts">
	import { writable } from 'svelte/store';
	import { ChevronDown, ChevronUp } from 'lucide-svelte';

	let expandedDisease = writable(null);
	function toggleDiseaseDetails(index: any) {
		expandedDisease.update((current: any) => (current === index ? null : index));
	}

	export let plant;
	export let showModal = false;
	export let closeModal = () => {};
</script>

{#if showModal}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-2">
		<div
			class="relative w-full max-w-3xl overflow-hidden rounded-xl border border-gray-300 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-900"
		>
			<div class="h-48 w-full bg-gray-100 dark:bg-gray-700">
				<img src={plant.image} alt={plant.name} class="h-full w-full object-cover" />
			</div>

			<div class="space-y-3 p-4">
				<h3 class="text-3xl font-bold text-gray-800 dark:text-gray-200">{plant.name}</h3>
				<p class="leading-relaxed text-gray-600 dark:text-gray-400">{plant.description}</p>

				<div class="max-h-[300px] space-y-6 overflow-y-auto">
					{#each plant.diseases as disease, index}
						<div class="rounded-lg bg-gray-100 p-4 shadow-md dark:bg-gray-800">
							<div class="flex items-center justify-between">
								<h4 class="text-lg font-semibold text-gray-700 dark:text-gray-300">
									{disease.name}
								</h4>
								<button on:click={() => toggleDiseaseDetails(index)} class="p-2">
									{#if $expandedDisease === index}
										<ChevronUp class="h-5 w-5 text-gray-500 dark:text-gray-300" />
									{:else}
										<ChevronDown class="h-5 w-5 text-gray-500 dark:text-gray-300" />
									{/if}
								</button>
							</div>

							{#if $expandedDisease === index}
								<div class="mt-3 space-y-2">
									<img
										src={disease.image}
										alt={disease.name}
										class="w-full rounded-lg object-cover shadow-sm"
									/>
									<p class="text-gray-600 dark:text-gray-400">{disease.description}</p>
								</div>
							{/if}

							<ul class="list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-400">
								{#each disease.sprays as spray}
									<li>💧 {spray}</li>
								{/each}
							</ul>
						</div>
					{/each}
				</div>

				<div class="flex justify-end gap-2">
					<button
						on:click={closeModal}
						class="rounded-lg bg-red-500 px-5 py-2 text-white transition hover:bg-red-600"
					>
						Close
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}
