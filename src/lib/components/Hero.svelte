<script lang="ts">
	import { HERO_CONTENT } from '$lib/constants';
	import { SectionId } from '$lib/types';
	import { ArrowRight, Code } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { createRipple, throttle } from '$lib/utils/animations';

	let heroSection: HTMLElement;
	let blobElement: HTMLElement;
	let projectsButton: HTMLElement;
	let servicesButton: HTMLElement;
	let scrollIndicator: HTMLElement;
	let mousePosition = $state({ x: 0, y: 0 });

	function scrollToProjects() {
		document.getElementById(SectionId.PROJECTS)?.scrollIntoView({ behavior: 'smooth' });
	}

	function scrollToServices() {
		document.getElementById(SectionId.SERVICES)?.scrollIntoView({ behavior: 'smooth' });
	}

	// Parallax blob effect
	function handleMouseMove(e: MouseEvent) {
		const rect = heroSection.getBoundingClientRect();
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		mousePosition.x = (e.clientX - rect.left - centerX) / centerX;
		mousePosition.y = (e.clientY - rect.top - centerY) / centerY;

		if (blobElement) {
			const moveX = mousePosition.x * 30;
			const moveY = mousePosition.y * 30;
			blobElement.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
		}
	}

	// Parallax on scroll
	function handleScroll() {
		if (blobElement) {
			const scrollY = window.scrollY;
			const moveY = scrollY * 0.1;
			blobElement.style.transform = `translate(-50%, calc(-50% + ${moveY}px))`;
		}
	}

	// Ripple effects
	function handleProjectsClick(e: MouseEvent) {
		createRipple(e, projectsButton);
		scrollToProjects();
	}

	function handleServicesClick(e: MouseEvent) {
		createRipple(e, servicesButton);
		scrollToServices();
	}

	onMount(() => {
		const throttledMouseMove = throttle((e: Event) => handleMouseMove(e as MouseEvent), 16);
		const throttledScroll = throttle(handleScroll, 16);

		heroSection?.addEventListener('mousemove', throttledMouseMove);
		window.addEventListener('scroll', throttledScroll);

		return () => {
			heroSection?.removeEventListener('mousemove', throttledMouseMove);
			window.removeEventListener('scroll', throttledScroll);
		};
	});
</script>

<section
	bind:this={heroSection}
	id={SectionId.HOME}
	class="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-black"
>
	<div class="absolute inset-0 grid-bg opacity-40 pointer-events-none"></div>

	<!-- Parallax Blob -->
	<div
		bind:this={blobElement}
		class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF6600]/10 rounded-full blur-[120px] pointer-events-none transition-transform duration-300 ease-out"
	></div>

	<!-- Mouse Follow Glow -->
	<div
		class="pointer-events-none fixed w-[300px] h-[300px] bg-[#FF6600]/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
		style="left: {mousePosition.x * 50 + 50}%; top: {mousePosition.y * 50 + 50}%"
	></div>

	<div class="max-w-6xl mx-auto px-6 relative z-10">
		<div class="flex flex-col items-center text-center">
			<div class="mb-8 animate-slide-up [animation-delay:0ms] opacity-0">
				<span
					class="px-4 py-1.5 rounded-full border border-[#FF6600]/30 bg-[#FF6600]/5 text-[#FF6600] text-xs font-medium tracking-widest uppercase"
				>
					{HERO_CONTENT.greeting}
				</span>
			</div>

			<h1
				class="text-5xl md:text-8xl font-bold text-white mb-8 leading-tight tracking-tight animate-slide-up [animation-delay:200ms] opacity-0"
			>
				{HERO_CONTENT.name} <br class="hidden md:block" />
				<span
					class="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6600] to-[#FF8533] gradient-animated"
				>
					{HERO_CONTENT.title}.
				</span>
			</h1>

			<p
				class="text-lg md:text-2xl text-slate-400 mb-12 max-w-2xl leading-relaxed font-light animate-slide-up [animation-delay:400ms] opacity-0"
			>
				<span class="text-slate-500">{HERO_CONTENT.description}</span>
			</p>

			<div class="flex flex-col sm:flex-row gap-6 animate-slide-up [animation-delay:600ms] opacity-0">
				<button
					bind:this={projectsButton}
					onclick={handleProjectsClick}
					class="ripple-btn group px-8 py-4 bg-[#FF6600] hover:bg-[#FF8533] text-white hover:text-black font-bold text-sm tracking-widest uppercase transition-all duration-300 rounded-sm flex items-center gap-3 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,102,0,0.3)]"
				>
					Lihat Portofolio
					<ArrowRight size={18} class="group-hover:translate-x-1 transition-transform" />
				</button>

				<button
					bind:this={servicesButton}
					onclick={handleServicesClick}
					class="ripple-btn group px-8 py-4 bg-transparent hover:bg-white/5 border border-white/20 hover:border-white text-white font-bold text-sm tracking-widest uppercase transition-all duration-300 rounded-sm flex items-center gap-3 hover:-translate-y-1"
				>
					<Code size={18} class="text-[#FF6600]" />
					Layanan Kami
				</button>
			</div>
		</div>
	</div>

	<!-- Scroll Indicator with Pulse -->
	<button
		bind:this={scrollIndicator}
		class="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 opacity-50 group cursor-pointer bg-transparent border-none"
		onclick={() => document.getElementById(SectionId.ABOUT)?.scrollIntoView({ behavior: 'smooth' })}
		aria-label="Scroll to about section"
	>
		<div
			class="w-[1px] h-24 bg-gradient-to-b from-transparent via-[#FF6600] to-transparent animate-pulse"
		></div>
		<span
			class="text-[10px] uppercase tracking-[0.3em] text-[#FF6600] rotate-90 origin-left translate-x-2 group-hover:translate-x-3 transition-transform"
		>
			Scroll
		</span>
	</button>
</section>
