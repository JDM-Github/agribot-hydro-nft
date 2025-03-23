<script lang="ts">
	export let showSprayModal: boolean = false;
	export let closeModal: () => void = () => {};

	const sprayOptions = [
		{ value: "spray1", label: "Rose Water Spray" },
		{ value: "spray2", label: "Mint Fresh Spray" },
		{ value: "spray3", label: "Lavender Calm Spray" },
		{ value: "spray4", label: "Citrus Burst Spray" },
		{ value: "spray5", label: "Herbal Guard Spray" },
		{ value: "spray6", label: "Eucalyptus Mist" },
		{ value: "spray7", label: "Ocean Breeze Spray" },
		{ value: "spray8", label: "Tea Tree Detox" },
		{ value: "spray9", label: "Floral Bloom Spray" },
		{ value: "spray10", label: "Aloe Soothe Spray" }
	];

	let slots = ["", "", "", ""];
	let selectedSlotIndex: number | null = null;

	function selectSpray(sprayValue: string) {
		if (selectedSlotIndex !== null) {
			slots[selectedSlotIndex] = sprayValue;
			selectedSlotIndex = null;
		}
	}

	function saveSetup() {
		console.log("Selected Sprays:", slots);
		closeModal();
	}
</script>

{#if showSprayModal}
<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
	<div class="w-full lg:h-auto sm:h-full max-w-5xl rounded-2xl bg-white shadow-2xl flex flex-col md:flex-row overflow-hidden">

		<div class="w-full md:w-1/2 bg-gray-50 flex flex-col items-center justify-center space-y-8 p-8">
			<h2 class="text-2xl font-bold text-gray-800">Setup Spray Slots</h2>
			<div class="grid grid-cols-2 gap-6">
				{#each slots as spray, index}
					<button 
						on:click={() => selectedSlotIndex = index}
						class={`sm:w-24 sm:h-24 lg:w-48 lg:h-48 flex items-center justify-center text-sm font-medium rounded-full border-4 transition-all duration-200 ${
							selectedSlotIndex === index ? 'border-green-600 bg-green-50 scale-110' : 'border-gray-300 bg-white'
						}`}
					>
						{spray ? sprayOptions.find(opt => opt.value === spray)?.label.split(" ")[0] : `Slot ${index + 1}`}
					</button>
				{/each}
			</div>
			<p class="text-sm text-gray-500">Click a slot, then select a spray.</p>
		</div>

		<div class="w-full md:w-1/2 p-6 overflow-y-auto max-h-[75vh]">
			<h2 class="sm:text-1x1 lg:text-2xl font-bold text-gray-800 mb-4">Available Sprays</h2>
			<ul class="space-y-3">
				{#each sprayOptions as option}
					<li>
						<button 
							on:click={() => selectSpray(option.value)}
							class="w-full flex items-center justify-between rounded-lg p-4 hover:bg-green-50"
						>
							<div class="flex items-center space-x-4">
								<div class="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold text-lg">
									{option.label[0]}
								</div>
								<span class="text-md font-medium text-gray-800">{option.label}</span>
							</div>
							{#if slots.includes(option.value)}
								<span class="text-green-600 font-semibold">✓ Selected</span>
							{/if}
						</button>
					</li>
				{/each}
			</ul>
		</div>

		<div class="w-full flex justify-end space-x-3 p-4  md:absolute md:bottom-4 md:right-4">
			<button 
				on:click={closeModal}
				class="rounded-lg bg-gray-200 px-6 py-3 text-gray-700 font-medium hover:bg-gray-300 transition"
			>
				Cancel
			</button>
			<button 
				on:click={saveSetup}
				class="rounded-lg bg-green-600 px-6 py-3 text-white font-semibold hover:bg-green-700 transition"
			>
				Save Setup
			</button>
		</div>
	</div>
</div>
{/if}
