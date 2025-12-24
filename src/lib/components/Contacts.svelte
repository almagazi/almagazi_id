<script lang="ts">
  import { CONTACT_INFO } from '$lib/constants';
  import { SectionId } from '$lib/types';
  import { Mail, MapPin, Github, Linkedin, Twitter, X, Send, CheckCircle, Loader2 } from 'lucide-svelte';

  let { isModalOpen, onOpenModal, onCloseModal } = $props();

  let formState = $state({ name: '', email: '', message: '' });
  let status = $state<'idle' | 'submitting' | 'success'>('idle');

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
</script>

<section id={SectionId.CONTACT} class="py-32 bg-black relative border-t border-white/5">
  <div class="max-w-5xl mx-auto px-6 text-center">
    <span class="text-[#FF6600] font-mono text-sm tracking-widest uppercase mb-4 block">Hubungi Kami</span>
    <h2 class="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
      Mari bangun sesuatu yang <br/>
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6600] to-white">legendaris.</span>
    </h2>
    
    <p class="text-slate-400 text-lg mb-12 max-w-xl mx-auto font-light leading-relaxed">
      Apakah Anda memiliki pertanyaan, proposal proyek, atau ingin bermitra dengan kami? Tim Almagazi siap mendengarkan dan memberikan solusi terbaik untuk bisnis Anda.
    </p>

    <button 
      onclick={onOpenModal}
      class="inline-flex items-center gap-3 px-12 py-6 bg-white hover:bg-[#FF6600] text-black hover:text-white font-bold text-sm tracking-widest uppercase rounded-sm transition-all duration-300 hover:-translate-y-1 mb-20 shadow-lg hover:shadow-[#FF6600]/50"
    >
      <Mail size={18} />
      Mulai Konsultasi
    </button>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-16">
      <div class="text-left">
        <h4 class="text-white font-bold text-xl mb-6 flex items-center gap-3">
          <div class="w-2 h-2 bg-[#FF6600] rounded-full"></div>
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
        <h4 class="text-white font-bold text-xl mb-6 flex items-center gap-3 md:justify-end">
          <div class="w-2 h-2 bg-[#FF6600] rounded-full md:order-2"></div>
          Sosial Media
        </h4>
        <div class="flex gap-4 md:justify-end">
          <a href={CONTACT_INFO.socials.github} class="p-3 bg-white/5 hover:bg-white hover:text-black rounded-full transition-all text-white">
            <Github size={20} />
          </a>
          <a href={CONTACT_INFO.socials.linkedin} class="p-3 bg-white/5 hover:bg-[#0077b5] hover:text-white rounded-full transition-all text-white">
            <Linkedin size={20} />
          </a>
          <!-- <a href={CONTACT_INFO.socials.twitter} class="p-3 bg-white/5 hover:bg-[#1DA1F2] hover:text-white rounded-full transition-all text-white">
            <Twitter size={20} />
          </a> -->
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

      <div class="relative w-full max-w-lg bg-[#0A0A0A] border border-white/10 rounded-lg p-8 shadow-2xl animate-slide-up">
        <button 
          onclick={onCloseModal}
          class="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <h3 class="text-2xl font-bold text-white mb-6">Hubungi Tim Kami</h3>

        {#if status === 'success'}
          <div class="flex flex-col items-center justify-center py-12 space-y-4">
            <div class="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center">
              <CheckCircle size={32} />
            </div>
            <p class="text-white font-medium text-lg">Membuka WhatsApp...</p>
            <p class="text-slate-400 text-center">Silakan kirim pesan melalui WhatsApp Anda.</p>
          </div>
        {:else}
          <form onsubmit={handleSubmit} class="space-y-6">
            <div>
              <label for="name" class="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Nama Lengkap / Perusahaan</label>
              <input
                id="name"
                type="text"
                required
                bind:value={formState.name}
                class="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-[#FF6600] outline-none transition-colors"
                placeholder="Nama Anda atau Perusahaan"
              />
            </div>
            <div>
              <label for="email" class="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Email Bisnis (Opsional)</label>
              <input
                id="email"
                type="email"
                bind:value={formState.email}
                class="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-[#FF6600] outline-none transition-colors"
                placeholder="nama@perusahaan.com"
              />
            </div>
            <div>
              <label for="message" class="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Kebutuhan Proyek</label>
              <textarea
                id="message"
                required
                rows={4}
                bind:value={formState.message}
                class="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-[#FF6600] outline-none transition-colors resize-none"
                placeholder="Ceritakan tentang kebutuhan bisnis Anda..."
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={status === 'submitting'}
              class="w-full bg-[#FF6600] hover:bg-[#FF8533] text-black font-bold py-4 rounded-sm transition-all disabled:opacity-50 flex items-center justify-center gap-2"
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