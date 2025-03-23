<script lang="ts">

	let gsap: any, ScrollTrigger;
	if (!import.meta.env.SSR) {
		import('gsap').then((module) => {
			gsap = module.default;
			import('gsap/ScrollTrigger').then((scrollTriggerModule) => {
				ScrollTrigger = scrollTriggerModule.ScrollTrigger;
				gsap.registerPlugin(ScrollTrigger);

				gsap.utils.toArray('.animate-section').forEach((section: any) => {
					gsap.fromTo(
						section,
						{ opacity: 0, y: 80 },
						{
							opacity: 1,
							y: 0,
							duration: 0.8,
							ease: 'power2.out',
							scrollTrigger: {
								trigger: section,
								start: 'top 80%',
								toggleActions: 'play none none none'
							}
						}
					);
				});

				gsap.utils.toArray('.feature-box').forEach((box: any, i: number) => {
					gsap.fromTo(
						box,
						{ opacity: 0, y: 50 },
						{
							opacity: 1,
							y: 0,
							duration: 0.2,
							delay: i * 0.2,
							ease: 'power2.out',
							scrollTrigger: {
								trigger: box,
								start: 'top 70%',
								toggleActions: 'play none none none'
							}
						}
					);
				});
			});
		});
	}

	import Footer from '$lib/components/Footer.svelte';
	import Contactus from './home/contactus.svelte';
	import Frontpage from './home/frontpage.svelte';
	import Showcase from './home/showcase.svelte';
	import Social from './home/social.svelte';
	import Technology from './home/technology.svelte';
	import Whatwedo from './home/whatwedo.svelte';
</script>

<main>
	<Frontpage />
	<Whatwedo />
	<Technology />
	<Showcase />
	<Contactus />
	<Social />
	<Footer />
</main>
