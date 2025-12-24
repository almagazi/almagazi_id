<script lang="ts">
	import { SERVICES } from '$lib/constants';
	import { SectionId } from '$lib/types';
	import { Code, PenTool, Database, MessageSquare } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { applyTiltEffect, resetTiltEffect, throttle } from '$lib/utils/animations';

	const iconComponents = {
		code: Code,
		'pen-tool': PenTool,
		database: Database,
		'message-square': MessageSquare
	};

	let serviceCards: HTMLElement[] = [];

	onMount(() => {
		// Initialize staggered reveal for service cards
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const index = serviceCards.indexOf(entry.target as HTMLElement);
						if (index !== -1) {
							setTimeout(() => {
								(entry.target as HTMLElement).classList.add('revealed');
							}, index * 150);
							observer.unobserve(entry.target);
						}
					}
				});
			},
			{ threshold: 0.1 }
		);

		serviceCards.forEach((card) => {
			if (card) {
				observer.observe(card);
			}
		});

		return () => {
			observer.disconnect();
		};
	});

	// 3D tilt effect handlers
	function handleCardMouseEnter(card: HTMLElement) {
		card.addEventListener('mousemove', (e) => handleCardMouseMove(e, card));
	}

	function handleCardMouseLeave(card: HTMLElement) {
		card.removeEventListener('mousemove', (e) => handleCardMouseMove(e, card));
		resetTiltEffect(card);
	}

	function handleCardMouseMove(e: MouseEvent, card: HTMLElement) {
		applyTiltEffect(e, card, 5);
	}
</script>

<section id={SectionId.SERVICES} class="py-32 bg-[#0A0A0A] relative border-t border-white/5">
	<div class="max-w-7xl mx-auto px-6">
		<div class="text-center mb-20">
			<span
				class="reveal-on-scroll text-[#FF6600] font-mono text-sm tracking-widest uppercase mb-4 block"
			>
				Layanan
			</span>
			<h2 class="reveal-on-scroll text-4xl md:text-5xl font-bold text-white">
				Keahlian & Kapabilitas
			</h2>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			{#each SERVICES as service}
				{@const Icon = iconComponents[service.icon as keyof typeof iconComponents]}
				<div
					bind:this={serviceCards[service.id - 1]}
					class="reveal-on-scroll tilt-card bg-black p-8 border border-white/5 hover:border-[#FF6600]/50 transition-all duration-300 hover:-translate-y-2 group glow-border"
					onmouseenter={() => handleCardMouseEnter(serviceCards[service.id - 1])}
					onmouseleave={() => handleCardMouseLeave(serviceCards[service.id - 1])}
					role="button"
					tabindex="0"
				>
					<div
						class="mb-6 text-slate-500 group-hover:text-[#FF6600] transition-colors group-hover:animate-bounce"
					>
						{#if Icon}
							<Icon size={32} />
						{/if}
					</div>
					<h3 class="text-xl font-bold text-white mb-4 group-hover:text-[#FF6600] transition-colors">
						{service.title}
					</h3>
					<p class="text-slate-400 text-sm leading-relaxed">
						{service.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
