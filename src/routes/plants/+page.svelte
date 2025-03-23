<script lang="ts">
	import Footer from '../../lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	import PlantModal from '../../lib/modal/PlantModal.svelte';

	let showModal = false;
	let plant = {
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKRPXQYgZjJmuQTgXVQNLoZRxRWe7aW09wg&s',
		name: 'Tomato Plant',
		description:
			'A healthy tomato plant known for its vibrant fruits and moderate care requirements.',
		diseases: [
			{
				name: 'Late Blight',
				description: 'A fungal disease causing dark spots on leaves and fruits.',
				image: 'https://placehold.co/600x400/000000/FFF',
				sprays: ['Copper Fungicide', 'Neem Oil'],
				severity: 'High'
			},
			{
				name: 'Powdery Mildew',
				description: 'A white, powdery fungus that covers leaves, reducing photosynthesis.',
				image: 'https://placehold.co/600x400/000000/FFF',
				sprays: ['Sulfur Spray', 'Neem Oil'],
				severity: 'Moderate'
			},
			{
				name: 'Bacterial Spot',
				description: 'Small, water-soaked lesions on leaves that grow into dark, necrotic spots.',
				image: 'https://placehold.co/600x400/000000/FFF',
				sprays: ['Copper Fungicide'],
				severity: 'Low'
			}
		]
	};

	const plantData = [
		{
			name: 'Lettuce',
			type: 'Leafy Green',
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKRPXQYgZjJmuQTgXVQNLoZRxRWe7aW09wg&s',
			description: 'A popular leafy green grown in NFT systems.'
		},
		{
			name: 'Spinach',
			type: 'Leafy Green',
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKRPXQYgZjJmuQTgXVQNLoZRxRWe7aW09wg&s',
			description: 'Nutritious green ideal for hydroponic growth.'
		},
		{
			name: 'Basil',
			type: 'Herb',
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKRPXQYgZjJmuQTgXVQNLoZRxRWe7aW09wg&s',
			description: 'A fragrant herb perfect for NFT hydroponics.'
		},
		{
			name: 'Tomato',
			type: 'Fruiting Vegetable',
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKRPXQYgZjJmuQTgXVQNLoZRxRWe7aW09wg&s',
			description: 'A common fruiting plant grown in NFT for its fast yield.'
		},
		{
			name: 'Cucumber',
			type: 'Vine Crop',
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKRPXQYgZjJmuQTgXVQNLoZRxRWe7aW09wg&s',
			description: 'Vining crop often grown in hydroponic channels.'
		},
		{
			name: 'Strawberry',
			type: 'Berry',
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKRPXQYgZjJmuQTgXVQNLoZRxRWe7aW09wg&s',
			description: 'Fruit crop that thrives in NFT with proper care.'
		}
	];

	let currentPage = writable(1);
	let itemsPerPage = 6;

	function paginate(items: any, page: any, perPage: any) {
		const start = (page - 1) * perPage;
		return items.slice(start, start + perPage);
	}

	function openPlantDetails(plant: any) {
		throw new Error('Function not implemented.');
	}
</script>

<main>
	<section class=" min-h-[calc(100vh-95px)] bg-gray-200 p-4 py-3 lg:px-16 dark:bg-gray-700">
		<div class="container mx-auto rounded-2xl bg-gray-100 p-2 px-6 dark:bg-gray-800">
			<div
				class="mb-3 flex flex-col gap-2 rounded-2xl border border-gray-200 bg-[#fafffc] p-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:p-3 dark:border-gray-700 dark:bg-gray-900"
			>
				<div class="flex items-center gap-2">
					<span class="text-xl sm:text-2xl">🌿</span>
					<h2 class="text-base font-bold text-gray-400 sm:text-lg dark:text-gray-300">
						SCANNED PLANTS
					</h2>
				</div>

				<div class="flex flex-col gap-2 sm:flex-row sm:items-center">
					<input
						type="text"
						placeholder="Search plants..."
						class="w-full min-w-0 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none sm:w-48 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
					/>
				</div>
			</div>

			<div
				class="grid grid-cols-1 gap-4 rounded-2xl border border-gray-200 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 dark:border-gray-700"
			>
				{#each paginate(plantData, $currentPage, itemsPerPage) as plant, index}
					<div
						class="transform overflow-hidden rounded-lg bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg dark:bg-gray-900"
						style="animation-delay: {index * 100}ms;"
					>
						<img src={plant.image} alt={plant.name} class="h-40 w-full object-cover" />

						<div class="flex h-auto min-h-40 flex-col justify-between p-4">
							<div>
								<h3 class="text-base font-bold text-green-700 sm:text-lg dark:text-green-400">
									{plant.name}
								</h3>

								<p class="mt-1 text-xs text-gray-600 sm:text-sm dark:text-gray-300">
									{plant.description.slice(0, 50)}...
								</p>

								<span
									class="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-[10px] font-semibold text-green-700 sm:text-xs dark:bg-green-700 dark:text-green-200"
								>
									{plant.type}
								</span>
							</div>

							<button
								class="mt-4 w-full rounded-lg bg-green-600 py-2 text-xs font-medium text-white transition hover:bg-green-700 sm:text-sm dark:bg-green-700 dark:hover:bg-green-800"
								on:click={() => {
									showModal = true;
								}}
							>
								View Details
							</button>
						</div>
					</div>
				{/each}
			</div>

			<div
				class="mt-3 flex flex-wrap justify-center gap-2 rounded-2xl bg-gray-200 p-3 dark:bg-gray-900"
			>
				{#each Array(Math.ceil(plantData.length / itemsPerPage)).fill(0) as _, i}
					<button
						class="rounded-md px-4 py-2 font-medium transition
					{i + 1 === $currentPage
							? 'bg-green-700 text-white'
							: 'bg-gray-200 text-gray-700 hover:bg-green-500 hover:text-white'}"
						on:click={() => currentPage.set(i + 1)}
					>
						{i + 1}
					</button>
				{/each}
			</div>
		</div>
	</section>
	<Footer />
</main>

<PlantModal
	{plant}
	bind:showModal
	closeModal={() => {
		showModal = false;
	}}
/>
