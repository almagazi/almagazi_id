<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Services from '$lib/components/Services.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Contact from '$lib/components/Contacts.svelte';
	import { onMount } from 'svelte';

	let isContactModalOpen = $state(false);

	function toggleModal(val: boolean) {
		isContactModalOpen = val;
	}

	onMount(() => {
		// Initialize global scroll reveal
		const revealElements = document.querySelectorAll('.reveal-on-scroll');

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('revealed');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
		);

		revealElements.forEach((element) => {
			observer.observe(element);
		});

		return () => {
			observer.disconnect();
		};
	});
</script>

<div class="bg-black min-h-screen text-slate-100 selection:bg-[#FF6600] selection:text-white font-sans">
	<Header onOpenContact={() => toggleModal(true)} />

	<main>
		<Hero />
		<About />
		<Services />
		<Projects onOpenContact={() => toggleModal(true)} />
		<Contact
			isModalOpen={isContactModalOpen}
			onOpenModal={() => toggleModal(true)}
			onCloseModal={() => toggleModal(false)}
		/>
	</main>
</div>
