<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let statsElement;
	let hasAnimated = false;

	const duration = 1500;
	const easing = cubicOut;

	// Create tweened stores for each number
	const clients = tweened(0, { duration, easing });
	const experience = tweened(0, { duration, easing });
	const remote = tweened(0, { duration, easing });

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (entry.isIntersecting && !hasAnimated) {
					// Start the animations
					clients.set(50);
					experience.set(25);
					remote.set(16);
					hasAnimated = true;
					observer.disconnect(); // Stop observing once animated
				}
			},
			{ threshold: 0.5 } // Trigger when 50% of the element is visible
		);

		observer.observe(statsElement);

		return () => observer.disconnect();
	});
</script>

<section
	class="bg-gradient-to-b from-purple-300 to-purple-100 p-6 
				 bg-gray-100 text-gray-800"
	id="stats"
	bind:this={statsElement}
>
	<div class="container mx-auto grid justify-center grid-cols-2 text-center 
							lg:grid-cols-3">
		<div class="flex flex-col justify-start m-2 lg:m-6">
			<p class="text-4xl font-bold leading-none lg:text-6xl">
				{Math.round($clients)}+
			</p>
			<p class="text-sm sm:text-base">Clients</p>
		</div>
		<div class="flex flex-col justify-start m-2 lg:m-6">
			<p class="text-4xl font-bold leading-none lg:text-6xl">
				{Math.round($experience)}+
			</p>
			<p class="text-sm sm:text-base">Years of experience</p>
		</div>
		<div class="flex flex-col justify-start m-2 lg:m-6">
			<p class="text-4xl font-bold leading-none lg:text-6xl">
				{Math.round($remote)}+
			</p>
			<p class="text-sm sm:text-base">Years remote work of experience</p>
		</div>
	</div>
</section>