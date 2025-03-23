<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let records = writable([
		{ date: 'January 6 2025', description: 'Sales record for January 6th.' },
		{ date: 'January 5 2025', description: 'Inventory update.' },
		{ date: 'January 4 2025', description: 'Daily expense log.' },
		{ date: 'January 3 2025', description: 'New orders received.' },
		{ date: 'January 2 2025', description: 'Employee attendance.' },
		{ date: 'January 1 2025', description: 'Yearly budget plan.' }
	]);

	let searchQuery = writable('');
	let viewMode = writable('grid-3');

	function filterRecords() {
		return $records.filter((record) =>
			record.date.toLowerCase().includes($searchQuery.toLowerCase())
		);
	}

	function renameRecord(index: number, newName: string) {
		records.update((recs) => {
			recs[index].date = newName;
			return recs;
		});
	}
</script>

<main>
	<section class="min-h-screen bg-gray-50 py-3">
		<div class="container mx-auto px-6">
			<!-- Header & Search -->
			<div
				class="flex flex-col items-center justify-between gap-4 rounded-lg bg-white p-4 shadow-md md:flex-row"
			>
				<h1 class="text-2xl font-bold text-green-700">📁 Records</h1>
				<div class="flex gap-3">
					<input
						type="text"
						bind:value={$searchQuery}
						on:input={filterRecords}
						placeholder="Search records by date..."
						class="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 transition focus:border-green-500 focus:ring focus:ring-green-200 focus:outline-none md:w-60"
					/>
					<select
						bind:value={$viewMode}
                        class="w-full rounded-lg border border-gray-300 bg-gray-50  px-3 py-2 focus:border-green-500 focus:ring focus:ring-green-200 focus:outline-none md:w-60"
					>
						<option value="grid-3">3 Columns</option>
						<option value="list">List View</option>
					</select>
				</div>
			</div>

			<div
				class={`bg-gray-100 px-5 py-3 ${
					$viewMode === 'grid-3'
						? 'grid grid-cols-3 gap-6'
						: $viewMode === 'grid-1'
							? 'grid grid-cols-1 gap-6'
							: 'flex flex-col gap-3'
				}`}
			>
				{#each filterRecords() as record, index}
					<div
						class="border-2 border-white transform overflow-hidden rounded-lg bg-white p-4 shadow-md transition duration-100 hover:shadow-lg hover:border-green-500"
						style="animation-delay: {index * 50}ms;"
					>
						<div class="flex items-center gap-3">
							<span class="text-2xl text-green-600">📂</span>
							<div>
								<h3 class="text-md font-semibold text-gray-800">{record.date}</h3>
								<p class="text-sm text-gray-500">{record.description}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
</main>
