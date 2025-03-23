<script lang="ts">
    export let scanning;
    export let toggleScan;
	export let closeModal;
</script>

<div
	class="mx-auto flex flex-col items-center justify-between space-y-2 rounded-lg p-4 md:flex-row md:space-y-0 md:space-x-4"
>
	<button
		class="w-full rounded-md bg-blue-500 px-4 py-2 font-medium text-white shadow-md hover:bg-blue-600 md:w-auto"
		on:click={closeModal}
	>
		SETUP SPRAY
	</button>
	<div class="flex w-full justify-center space-x-2 md:w-auto">
		<button
			class="w-full rounded-md px-4 py-2 font-medium text-white shadow-md transition md:w-auto"
			class:bg-green-500={scanning}
			class:bg-gray-400={!scanning}
			on:click={() => toggleScan(true)}
		>
			START SCAN
		</button>
		<button
			class="w-full rounded-md px-4 py-2 font-medium text-white shadow-md transition md:w-auto"
			class:bg-red-500={!scanning}
			class:bg-gray-400={scanning}
			on:click={() => toggleScan(false)}
		>
			STOP SCAN
		</button>
	</div>
</div>
