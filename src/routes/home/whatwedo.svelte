<section class="animate-section bg-gray-50 px-4 py-14 sm:px-6 sm:py-16 dark:bg-gray-800">
	<div class="container mx-auto">
		<h2
			class="text-center text-2xl font-bold text-gray-800 sm:text-xl md:text-3xl dark:text-gray-100"
		>
			How AGRI-BOT Works
		</h2>
		<p
			class="mx-auto mt-3 max-w-2xl text-center text-sm text-gray-600 sm:text-base dark:text-gray-400"
		>
			AGRI-BOT runs **on-demand** when activated by the user, using AI-powered cameras and smart
			sensors to analyze plant health, detect diseases, and apply treatments with precision.
		</p>

		<div class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:mx-40 lg:grid-cols-3">
			{#each [{ title: 'AI-Powered Plant Analysis', desc: 'Scans plants on demand, detecting health issues in real-time.', icon: '🤖' }, { title: 'Smart Disease Detection', desc: 'AI identifies diseases & deficiencies when you initiate a scan.', icon: '🔬' }, { title: 'Targeted Precision Spraying', desc: 'Automatically sprays affected areas based on scan results.', icon: '🚜' }] as feature}
				<div
					class="feature-box group flex transform flex-col items-center rounded-lg bg-white p-5
            text-center shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl
            dark:bg-gray-700 dark:text-gray-300"
				>
					<div class="mb-3 text-4xl group-hover:animate-bounce sm:text-5xl">
						{feature.icon}
					</div>
					<h3 class="text-lg font-semibold text-green-700 sm:text-xl dark:text-green-400">
						{feature.title}
					</h3>
					<p class="mt-1 text-xs text-gray-600 sm:text-sm dark:text-gray-400">{feature.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
