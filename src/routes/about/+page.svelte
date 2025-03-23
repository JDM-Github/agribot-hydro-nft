<script>
	import Footer from '../../lib/components/Footer.svelte';
	import Documents from './documents.svelte';

	const members = [
		{
			name: 'John Dave Pega',
			role: 'Programmer / Documentation',
			image: '/Members/Pega.jpg',
			description: 'Coding the backbone of our project while keeping everything on record.'
		},
		{
			name: 'Baby Joy Maquilla',
			role: 'Frontend / Documentation',
			image: '/Members/Maquilla.jpg',
			description: 'Bringing the UI to life and ensuring our documents are in order.'
		},
		{
			name: 'Twinnie Hipolito',
			role: 'Paperwork / Documentation / Tracking',
			image: '/Members/Hipolito.jpg',
			description: 'Making sure everything runs smoothly and deadlines are met.'
		},
		{
			name: 'Lowella Marie Golez',
			role: 'Interviewer / Paperwork / Tracker',
			image: '/Members/Golez.jpg',
			description: 'Gathering insights and keeping our research on point.'
		}
	];

	let links = [
		{ name: 'GitHub', url: 'https://github.com', icon: '<i class="fab fa-github text-3xl"></i>' },
		{
			name: 'Documentation',
			url: 'https://example.com/docs',
			icon: '<i class="fas fa-book text-3xl"></i>'
		},
		{
			name: 'Facebook',
			url: 'https://facebook.com',
			icon: '<i class="fab fa-facebook text-3xl"></i>'
		},
		{
			name: 'Gmail',
			url: 'mailto:example@gmail.com',
			icon: '<i class="fas fa-envelope text-3xl"></i>'
		}
	];
</script>

<section class="min-h-screen bg-gray-50 dark:bg-gray-900">
	<div>
		<div class="relative h-64 w-full overflow-hidden rounded-lg md:h-[60vh]">
			<img src="/about.jpg" alt="Project" class="h-full w-full object-cover" />
		</div>

		<div
			class="relative space-y-12 bg-gray-200 p-8 px-4 text-gray-800 before:absolute before:inset-0 before:bg-[url('/Texture/about.webp')] before:bg-cover before:bg-center before:opacity-10 sm:px-8 lg:px-16 xl:px-64 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 dark:text-gray-200"
		>
			<div class="z-10 flex flex-col items-center gap-6 md:flex-row">
				<div class="flex-1 space-y-3 text-center md:text-left">
					<h3 class="text-2xl font-semibold text-green-600">Our Mission</h3>
					<p class="leading-relaxed">
						Our mission is to drive innovation and excellence through technology, empowering
						individuals and businesses with cutting-edge solutions. We are committed to fostering
						creativity, inclusivity, and sustainability while delivering impactful and meaningful
						experiences to our users.
					</p>
				</div>
				<div class="w-1/2 md:w-1/3">
					<img src="/mission.png" alt="Our Mission" class="h-full w-full rounded-lg object-cover" />
				</div>
			</div>

			<div class="flex flex-col items-center gap-6 md:flex-row-reverse">
				<div class="flex-1 space-y-3 text-center md:text-left">
					<h3 class="text-2xl font-semibold text-green-600">Our Vision</h3>
					<p class="leading-relaxed">
						Our vision is to be a global leader in technological advancements, setting new standards
						in innovation, user experience, and digital transformation. We envision a future where
						technology seamlessly enhances everyday life, fostering growth, connection, and
						limitless possibilities for everyone.
					</p>
				</div>
				<div class="w-1/2 md:w-1/3">
					<img src="/vision.png" alt="Our Vision" class="h-full w-full rounded-lg object-cover" />
				</div>
			</div>
		</div>

		<div class="space-y-8 rounded-2xl bg-gray-100 dark:bg-gray-800 p-6 sm:p-8 lg:p-12 dark:bg-gradient-to-b">
			<h3 class="text-center text-2xl font-extrabold md:text-4xl text-gray-800 dark:text-white">Meet the Team</h3>

			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-32">
				{#each members as member}
					<div
						class="flex flex-col items-center space-y-4 rounded-xl p-5 shadow-lg border border-gray-200 dark:border-gray-700"
					>
						<img
							src={member.image}
							alt={member.name}
							class="h-32 w-32 rounded-full border-4 border-green-400 object-cover shadow-md"
						/>
						<div class="text-center">
							<h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200">{member.name}</h4>
							<p class="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
						</div>
						<p class="text-center text-sm text-gray-600 italic dark:text-gray-300">
							"{member.description}"
						</p>
					</div>
				{/each}
			</div>
		</div>

		<Documents />
	</div>
</section>

<!-- Footer -->
<Footer />
