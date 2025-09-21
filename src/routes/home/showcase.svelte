<script lang="ts">
	import Swiper from 'swiper/bundle';
	import 'swiper/css/bundle';
	import { onMount } from 'svelte';

	let swiperInstance;
	export let plants: any = [];

	onMount(() => {
		swiperInstance = new Swiper('.plant-swiper', {
			slidesPerView: 1,
			spaceBetween: 16,
			grabCursor: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			breakpoints: {
				640: { slidesPerView: 1 },
				768: { slidesPerView: 2, spaceBetween: 20 },
				1024: { slidesPerView: 3, spaceBetween: 24 }
			}
		});
	});
</script>

<section class="animate-section bg-gray-100 py-14 dark:bg-gray-800">
	<div class="container mx-auto px-6">
		<div class="mb-10 text-center">
			<h2 class="text-2xl font-bold tracking-tight text-gray-800 lg:text-3xl dark:text-gray-100">
				Plants We Scan & Monitor
			</h2>
			<p class="mx-auto mt-3 max-w-2xl text-sm text-gray-600 sm:text-base dark:text-gray-400">
				Our AI system ensures early disease detection for optimal growth.
			</p>
		</div>

		<div class="relative lg:mx-20">
			<div class="plant-swiper swiper">
				<div class="swiper-wrapper">
					{#each plants as plant}
						<div class="swiper-slide feature-box">
							<div
								class="flex h-[280px] flex-col overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg lg:h-[300px] dark:bg-gray-700"
							>
								<div class="h-48 w-full sm:h-40">
									<img src={plant.image} alt={plant.name} class="h-full w-full object-cover" />
								</div>
								<div class="flex flex-1 flex-col justify-between p-3">
									<div>
										<h3
											class="text-lg font-semibold text-green-700 sm:text-base dark:text-green-400"
										>
											{plant.name}
										</h3>
										<p class="mt-1 text-xs text-gray-600 sm:text-[11px] dark:text-gray-300">
											{plant.description}
										</p>
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>

				<div class="swiper-pagination mt-5"></div>
			</div>
		</div>
	</div>
</section>
