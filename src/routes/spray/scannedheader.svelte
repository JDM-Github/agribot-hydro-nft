<script lang="ts">
    export let searchPlants: (target: string) => void;
    export let filterPlants: (target: string) => void;
</script>

<div
	class="mb-4 flex flex-col gap-3 rounded-2xl border border-gray-200 bg-[#fafffc] p-3 sm:flex-row sm:items-center sm:justify-between"
>
	<div class="flex items-center gap-2">
		<span class="text-2xl">🌿</span>
		<h2 class="text-lg font-bold text-gray-400 sm:text-xl">SCANNED PLANTS</h2>
	</div>

	<div class="flex flex-col gap-2 sm:flex-row sm:items-center">
		<input
			type="text"
			placeholder="Search plants..."
			class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none sm:w-48"
			on:input={(e) => searchPlants((e.target as HTMLInputElement).value)}
		/>

		<select
			class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none sm:w-36"
			on:change={(e) => filterPlants((e.target as HTMLSelectElement).value)}
		>
			<option value="all">All Plants</option>
			<option value="sprayed">Sprayed Plants</option>
			<option value="unsprayed">Unsprayed Plants</option>
		</select>
	</div>
</div>
