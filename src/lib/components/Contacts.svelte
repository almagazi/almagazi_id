<script lang="ts">
	import { CONTACT_INFO } from '$lib/constants';
	import { SectionId } from '$lib/types';
	import {
		Mail,
		MapPin,
		Github,
		Linkedin,
		Twitter,
		X,
		Send,
		CheckCircle,
		Loader2
	} from 'lucide-svelte';
	import { createRipple } from '$lib/utils/animations';

	let { isModalOpen, onOpenModal, onCloseModal } = $props();

	let formState = $state({ name: '', email: '', message: '' });
	let status = $state<'idle' | 'submitting' | 'success'>('idle');
	let submitButton: HTMLElement;
	let socialLinks: HTMLElement[] = [];

	function handleSubmit(e: Event) {
		e.preventDefault();
		status = 'submitting';

		// Construct WhatsApp message
		let messageBody = `Nama: ${formState.name}\n`;
		if (formState.email) {
			messageBody += `Email: ${formState.email}\n`;
		}
		messageBody += `\nPesan:\n${formState.message}`;

		const whatsappUrl = `https://api.whatsapp.com/send/?phone=62816782197&text=${encodeURIComponent(messageBody)}&type=phone_number&app_absent=0`;

		// Open WhatsApp
		window.open(whatsappUrl, '_blank');

		// Show success state
		status = 'success';
		formState = { name: '', email: '', message: '' };

		// Close modal after success delay
		setTimeout(() => {
			onCloseModal();
			status = 'idle';
		}, 2000);
	}

	function handleContactClick(e: MouseEvent) {
		createRipple(e, submitButton);
		onOpenModal();
	}

	// Staggered social icon bounce on hover
	function handleSocialMouseEnter(index: number) {
		socialLinks.forEach((link, i) => {
			if (i !== index) {
				setTimeout(() => {
					link.classList.add('animate-bounce');
					setTimeout(() => link.classList.remove('animate-bounce'), 500);
				}, Math.abs(i - index) * 100);
			}
		});
	}
</script>

<section id={SectionId.CONTACT} class="py-32 bg-black relative border-t border-white/5">
	<div class="max-w-5xl mx-auto px-6 text-center">
		<span
			class="reveal-on-scroll text-[#FF6600] font-mono text-sm tracking-widest uppercase mb-4 block"
		>
			Hubungi Kami
		</span>
		<h2
			class="reveal-on-scroll text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
		>
			Mari bangun sesuatu yang <br />
			<span class="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6600] to-white"
				>legendaris.</span
			>
		</h2>

		<p
			class="reveal-on-scroll text-slate-400 text-lg mb-12 max-w-xl mx-auto font-light leading-relaxed"
		>
			Apakah Anda memiliki pertanyaan, proposal proyek, atau ingin bermitra dengan kami? Tim
			Almagazi siap mendengarkan dan memberikan solusi terbaik untuk bisnis Anda.
		</p>

		<button
			bind:this={submitButton}
			onclick={handleContactClick}
			class="ripple-btn reveal-on-scroll inline-flex items-center gap-3 px-12 py-6 bg-white hover:bg-[#FF6600] text-black hover:text-white font-bold text-sm tracking-widest uppercase rounded-sm transition-all duration-300 hover:-translate-y-1 mb-20 shadow-lg hover:shadow-[#FF6600]/50"
		>
			<Mail size={18} />
			Mulai Konsultasi
		</button>

		<div class="reveal-on-scroll grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-16">
			<div class="text-left">
				<h4 class="text-white font-bold text-xl mb-6 flex items-center gap-3">
					<div class="w-2 h-2 bg-[#FF6600] rounded-full animate-pulse"></div>
					PT Amal Madani Gapura Zakiya
				</h4>
				<ul class="space-y-4 text-slate-400">
					<li class="flex items-center gap-3">
						<MapPin size={18} class="text-[#FF6600]" />
						{CONTACT_INFO.location}
					</li>
				</ul>
			</div>

			<div class="text-left md:text-right">
				<h4
					class="text-white font-bold text-xl mb-6 flex items-center gap-3 md:justify-end"
				>
					<div class="w-2 h-2 bg-[#FF6600] rounded-full md:order-2 animate-pulse"></div>
					Sosial Media
				</h4>
				<div class="flex gap-4 md:justify-end">
					<a
						bind:this={socialLinks[0]}
						href={CONTACT_INFO.socials.github}
						onmouseenter={() => handleSocialMouseEnter(0)}
						class="p-3 bg-white/5 hover:bg-white hover:text-black rounded-full transition-all text-white hover:scale-110 hover:-translate-y-1"
					>
						<Github size={20} />
					</a>
					<a
						bind:this={socialLinks[1]}
						href={CONTACT_INFO.socials.linkedin}
						onmouseenter={() => handleSocialMouseEnter(1)}
						class="p-3 bg-white/5 hover:bg-[#0077b5] hover:text-white rounded-full transition-all text-white hover:scale-110 hover:-translate-y-1"
					>
						<Linkedin size={20} />
					</a>
				</div>
			</div>
		</div>
	</div>

	{#if isModalOpen}
		<div class="fixed inset-0 z-50 flex items-center justify-center px-4">
			<div
				class="absolute inset-0 bg-black/90 backdrop-blur-md animate-fade-in"
				role="button"
				tabindex="0"
				onclick={onCloseModal}
				onkeydown={(e) => e.key === 'Escape' && onCloseModal()}
				aria-label="Close modal"
			></div>

			<div
				class="relative w-full max-w-lg bg-[#0A0A0A] border border-white/10 rounded-lg p-8 shadow-2xl animate-scale-in"
			>
				<button
					onclick={onCloseModal}
					class="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors hover:rotate-90 transform transition-transform"
				>
					<X size={24} />
				</button>

				<h3 class="text-2xl font-bold text-white mb-6">Hubungi Tim Kami</h3>

				{#if status === 'success'}
					<div class="flex flex-col items-center justify-center py-12 space-y-4">
						<div
							class="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center"
						>
							<CheckCircle size={32} class="checkmark-draw" />
						</div>
						<p class="text-white font-medium text-lg">Membuka WhatsApp...</p>
						<p class="text-slate-400 text-center">
							Silakan kirim pesan melalui WhatsApp Anda.
						</p>
					</div>
				{:else}
					<form onsubmit={handleSubmit} class="space-y-6">
						<div class="input-animated relative">
							<label
								for="name"
								class="absolute left-4 top-3 text-slate-500 text-sm transition-all pointer-events-none"
							>
								Nama Lengkap / Perusahaan
							</label>
							<input
								id="name"
								type="text"
								required
								bind:value={formState.name}
								class="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 pt-5 text-white focus:border-[#FF6600] outline-none transition-all focus:ring-1 focus:ring-[#FF6600]/50 placeholder-transparent"
								placeholder="Nama Anda atau Perusahaan"
							/>
						</div>
						<div class="input-animated relative">
							<label
								for="email"
								class="absolute left-4 top-3 text-slate-500 text-sm transition-all pointer-events-none"
							>
								Email Bisnis (Opsional)
							</label>
							<input
								id="email"
								type="email"
								bind:value={formState.email}
								class="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 pt-5 text-white focus:border-[#FF6600] outline-none transition-all focus:ring-1 focus:ring-[#FF6600]/50 placeholder-transparent"
								placeholder="nama@perusahaan.com"
							/>
						</div>
						<div class="input-animated relative">
							<label
								for="message"
								class="absolute left-4 top-3 text-slate-500 text-sm transition-all pointer-events-none"
							>
								Kebutuhan Proyek
							</label>
							<textarea
								id="message"
								required
								rows={4}
								bind:value={formState.message}
								class="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 pt-5 text-white focus:border-[#FF6600] outline-none transition-all focus:ring-1 focus:ring-[#FF6600]/50 resize-none placeholder-transparent"
								placeholder="Ceritakan tentang kebutuhan bisnis Anda..."
							></textarea>
						</div>

						<button
							type="submit"
							disabled={status === 'submitting'}
							class="ripple-btn w-full bg-[#FF6600] hover:bg-[#FF8533] text-black font-bold py-4 rounded-sm transition-all disabled:opacity-50 flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,102,0,0.3)]"
						>
							{#if status === 'submitting'}
								<Loader2 size={20} class="animate-spin" />
								Memproses...
							{:else}
								<Send size={18} />
								Kirim Pesan WhatsApp
							{/if}
						</button>
					</form>
				{/if}
			</div>
		</div>
	{/if}
</section>
