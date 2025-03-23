<script>
	import { onMount } from 'svelte';
	import Swiper from 'swiper/bundle';
	import 'swiper/css/bundle';

	let interviews = [
		{
			title: 'Interview with Local Farmers',
			description:
				'We sat down with local farmers to discuss sustainable agriculture, the challenges they face, and how they are adapting to modern techniques. Their insights gave us a deeper understanding of the importance of eco-friendly farming.',
			image: '/Interview/1.jpg'
		},
		{
			title: 'Visit to a Hydroponics Farm',
			description:
				'Exploring the future of farming through hydroponics. We visited a high-tech farm where crops are grown without soil, using nutrient-rich water solutions. The efficiency and sustainability of this method amazed us.',
			image: '/Interview/2.jpg'
		}
	];

	let images = [
		'/Gallery/1.jpg',
		'/Gallery/2.jpg',
		'/Gallery/3.jpg',
		'/Gallery/4.jpg',
		'/Gallery/5.jpg'
	];

	onMount(() => {
        new Swiper('.swiper', {
            loop: true,
            spaceBetween: 15, 
            slidesPerView: 1.2,
            centeredSlides: true,
            breakpoints: {
                640: { slidesPerView: 1.5 },
                1024: { slidesPerView: 2.2 } 	
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        });
    });
</script>

<section class="bg-gray-200 from-gray-900 to-gray-800 py-16 dark:bg-gradient-to-b">
	<div class="container mx-auto px-6 lg:px-20">
		<div class="mb-12 text-center">
			<h2 class="text-2xl font-extrabold text-gray-800 md:text-4xl dark:text-white">
				Our Journey & Insights
			</h2>
			<p class="mx-auto mt-4 max-w-3xl leading-relaxed text-gray-600 dark:text-gray-300">
				Throughout our research, we engaged with industry experts, farmers, and technology
				innovators. Below, you’ll find some of our key interviews and a gallery showcasing our
				experiences.
			</p>
		</div>

		<div class="space-y-16">
			{#each interviews as interview, i}
				<div
					class="flex flex-col items-center gap-8 md:flex-row md:gap-12 {i % 2 !== 0
						? 'md:flex-row-reverse'
						: ''}"
				>
					<div class="h-64 w-full overflow-hidden rounded-xl shadow-lg md:w-1/2">
						<img src={interview.image} alt="Interview" class="h-full w-full object-cover" />
					</div>
					<div class="flex-1 space-y-4 text-center md:text-left border-green-500 border-l-2 pl-6">
						<h3 class="text-2xl font-semibold text-green-700 dark:text-green-400">
							{interview.title}
						</h3>
						<p class="leading-relaxed text-gray-700 dark:text-gray-300">
							{interview.description}
						</p>
					</div>
				</div>
			{/each}
		</div>

		<div class="mt-20">
			<h3 class="mb-8 text-center text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
				Photo Gallery
			</h3>
			<div class="relative mx-auto max-w-7xl px-4">
				<div class="swiper">
					<div class="swiper-wrapper">
						{#each images as image}
							<div class="swiper-slide">
								<img
									src={image}
									alt="Gallery"
									class="h-[300px] w-full rounded-xl object-cover shadow-lg sm:h-[400px] md:h-[450px]"
								/>
							</div>
						{/each}
					</div>
					<div class="swiper-pagination"></div>
				</div>
			</div>
		</div>
	</div>
</section>
