<script	lang="ts">
	import PlantModal from '$lib/modal/PlantModal.svelte';
	import DownloadModal from '$lib/components/modal/Download.svelte';
	import SetupSprayModal from	'../../lib/modal/SetupSprayModal.svelte';
	import Camera from './camera.svelte';
	import Scannedheader from './scannedheader.svelte';
	import SprayButton from	'./spraybuttons.svelte';

	let	detectedPlants = [
		{
			id:	1,
			imageUrl:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKRPXQYgZjJmuQTgXVQNLoZRxRWe7aW09wg&s',
			description: 'Healthy tomato plant with	minor leaf spots.',
			name: 'Tomato',
			icon: '🍅',
			spray: 'Insecticide	A',
			row: 3,
			column:	5,
			timestamp: '2025-03-03 10:15:32',
			confidence:	98
		},
		{
			id:	2,
			imageUrl:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKRPXQYgZjJmuQTgXVQNLoZRxRWe7aW09wg&s',
			description: 'Blooming rose	plant.',
			name: 'Rose',
			icon: '🌹',
			spray: 'Fungicide B',
			row: 2,
			column:	4,
			timestamp: '2025-03-03 10:16:12',
			confidence:	95
		},
		{
			id:	3,
			imageUrl:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKRPXQYgZjJmuQTgXVQNLoZRxRWe7aW09wg&s',
			description: 'Another rose plant scanned.',
			name: 'Rose',
			icon: '🌹',
			spray: 'Fungicide B',
			row: 2,
			column:	5,
			timestamp: '2025-03-03 10:17:05',
			confidence:	93
		},
		{
			id:	4,
			imageUrl:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKRPXQYgZjJmuQTgXVQNLoZRxRWe7aW09wg&s',
			description: 'Rose plant with mild pest	damage.',
			name: 'Rose',
			icon: '🌹',
			spray: 'Fungicide B',
			row: 2,
			column:	6,
			timestamp: '2025-03-03 10:18:10',
			confidence:	92
		},
		{
			id:	5,
			imageUrl:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKRPXQYgZjJmuQTgXVQNLoZRxRWe7aW09wg&s',
			description: 'Yet another rose in the scanned area.',
			name: 'Rose',
			icon: '🌹',
			spray: 'Fungicide B',
			row: 3,
			column:	1,
			timestamp: '2025-03-03 10:19:45',
			confidence:	90
		},
		{
			id:	6,
			imageUrl:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKRPXQYgZjJmuQTgXVQNLoZRxRWe7aW09wg&s',
			description: 'Rose plant detected under	shade.',
			name: 'Rose',
			icon: '🌹',
			spray: 'Fungicide B',
			row: 3,
			column:	2,
			timestamp: '2025-03-03 10:20:22',
			confidence:	89
		},
		{
			id:	7,
			imageUrl:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKRPXQYgZjJmuQTgXVQNLoZRxRWe7aW09wg&s',
			description: 'Rose plant detected near water source.',
			name: 'Rose',
			icon: '🌹',
			spray: 'Fungicide B',
			row: 3,
			column:	3,
			timestamp: '2025-03-03 10:21:00',
			confidence:	87
		},
		{
			id:	8,
			imageUrl:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKRPXQYgZjJmuQTgXVQNLoZRxRWe7aW09wg&s',
			description: 'Unidentified plant with unclear leaves.',
			name: 'Unknown Plant',
			icon: '❓',
			spray: null,
			row: 5,
			column:	7,
			timestamp: '2025-03-03 10:22:18',
			confidence:	65
		}
	];

	// MODAL
	let	showModal =	false;
	let	showSprayModal = false;
	let	plant =	{
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKRPXQYgZjJmuQTgXVQNLoZRxRWe7aW09wg&s',
		name: 'Tomato Plant',
		description:
			'A healthy tomato plant	known for its vibrant fruits and moderate care requirements.',
		diseases: ['Late Blight', 'Powdery Mildew',	'Bacterial Spot'],
		sprays:	['Copper Fungicide', 'Sulfur Spray', 'Neem Oil']
	};

	let	scanning = false;
	function toggleScan(state: boolean)	{
		scanning = state;
	}
	let	selectedPlant: any = null;

	function openPlantModal(index: any)	{
		selectedPlant =	index;
	}
	function closePlantModal() {
		selectedPlant =	null;
	}
	function searchPlants(target: string) {}
	function filterPlants(target: string) {}
	function showScannedArea(target: PlantInterface) {}
</script>

<div class="flex flex-col bg-gray-200 p-4 lg:px-16">
	<div class="mb-4 flex flex-col gap-4 md:flex-row">
		<Camera	/>

		<div class="w-full rounded-2xl bg-white	lg:p-6	shadow-xl md:flex-1">
			<Scannedheader {searchPlants} {filterPlants} />

			<div
				class="mx-3	max-h-[400px] space-y-2	overflow-y-auto	rounded-2xl	border-2 border-gray-200 bg-gray-100 lg:p-3"
			>
				<ul	class="space-y-3">
					{#each detectedPlants as plant,	index}
						<li
							class="relative	flex items-stretch rounded-lg border border-gray-100 bg-white shadow-sm	transition hover:bg-gray-50"
						>
							<button
								class="h-34	w-1/4 flex-shrink-0	overflow-hidden	rounded-l-lg"
								on:click={() => openPlantModal(index)}
							>
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKRPXQYgZjJmuQTgXVQNLoZRxRWe7aW09wg&s"
									alt={plant.name}
									class="h-full w-full object-cover"
								/>
							</button>

							<div class="flex flex-1	flex-col justify-center	p-3">
								<p class="text-lg font-semibold	text-gray-900">{plant.name}</p>
								<p class="mt-1 text-sm text-gray-500">
									{plant.spray ? plant.spray : 'Spray	Not	Available'}
								</p>
								<div class="mt-2 space-y-1 text-xs text-gray-500">
									<p>
										<strong>Scanned	Position:</strong> Row {plant.row ?? 'N/A'}, Column	{plant.column ??
											'N/A'}
									</p>
									<p><strong>Detection Time:</strong>	{plant.timestamp ?? 'Unknown'}</p>
									<p>
										<strong>Confidence:</strong>
										{plant.confidence ?	`${plant.confidence}%` : 'N/A'}
									</p>
								</div>
							</div>

							<div class="flex flex-col items-center justify-center space-y-2	p-3">
								<button
									class="rounded-md bg-blue-500 px-3 py-1	font-medium	text-white shadow-sm hover:bg-blue-600"
									on:click={() => { showModal	= true;	}}
								>
									View Details
								</button>
								<button
									class="rounded-md bg-green-500 px-3	py-1 font-medium text-white	shadow-sm hover:bg-green-600"
									on:click={() => showScannedArea(plant)}
								>
									View Scan Area
								</button>
							</div>
						</li>
					{/each}
				</ul>
			</div>

			<SprayButton {toggleScan} {scanning} closeModal={()	=> { showSprayModal	= true;	}}/>
		</div>
	</div>
</div>

<PlantModal
	{plant}
	bind:showModal
	closeModal={() => {
		showModal =	false;
	}}
/>

<SetupSprayModal
	bind:showSprayModal
	closeModal={() => {
		showSprayModal = false;
	}}
/>

<!-- <DownloadModal />	 -->