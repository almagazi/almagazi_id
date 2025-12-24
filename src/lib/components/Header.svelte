<script lang="ts">
  import { NAV_ITEMS, APP_NAME } from '$lib/constants';
  import { SectionId } from '$lib/types';
  import { Menu, X } from 'lucide-svelte';
  import Logo from './Logo.svelte';

  let { onOpenContact } = $props();

  let isScrolled = $state(false);
  let isMobileMenuOpen = $state(false);

  function handleScroll() {
    isScrolled = window.scrollY > 20;
  }

  $effect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      isMobileMenuOpen = false;
    }
  }
</script>

<header 
  class={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    isScrolled 
      ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4' 
      : 'bg-transparent border-transparent py-6'
  }`}
>
  <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
    <button 
      class="cursor-pointer group flex items-center gap-3 bg-transparent border-none p-0"
      onclick={() => scrollToSection(SectionId.HOME)}
    >
       <Logo 
         class="w-10 h-10 rounded-sm bg-white p-1 object-contain hover:scale-105 transition-transform duration-300" 
       />
       <div class="flex flex-col items-start">
         <span class="font-display font-bold text-xl leading-none tracking-tighter text-white group-hover:text-[#FF6600] transition-colors duration-300">
           {APP_NAME.toUpperCase()}
         </span>
         <span class="text-[10px] font-bold tracking-[0.3em] text-[#FF6600] leading-none mt-1">
           INDONESIA
         </span>
       </div>
    </button>

    <nav class="hidden md:flex gap-1 items-center bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-sm">
      {#each NAV_ITEMS as item}
        <button
          onclick={() => scrollToSection(item.to)}
          class="text-xs font-medium text-slate-400 hover:text-white hover:bg-white/10 px-5 py-2 rounded-full transition-all uppercase tracking-widest"
        >
          {item.label}
        </button>
      {/each}
    </nav>

    <button 
      onclick={onOpenContact}
      class="hidden md:block px-6 py-2.5 bg-[#FF6600] hover:bg-white text-white hover:text-black font-bold text-xs tracking-widest rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,102,0,0.5)] uppercase"
    >
      Hubungi Kami
    </button>

    <button 
      class="md:hidden text-white hover:text-[#FF6600] transition-colors"
      onclick={() => isMobileMenuOpen = !isMobileMenuOpen}
    >
      {#if isMobileMenuOpen}
        <X size={24} />
      {:else}
        <Menu size={24} />
      {/if}
    </button>
  </div>

  {#if isMobileMenuOpen}
    <div class="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 min-h-screen animate-fade-in">
      <nav class="flex flex-col p-8 gap-8 items-center justify-center h-[80vh]">
        {#each NAV_ITEMS as item}
          <button
            onclick={() => scrollToSection(item.to)}
            class="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-600 hover:to-[#FF6600] transition-all"
          >
            {item.label}
          </button>
        {/each}
      </nav>
    </div>
  {/if}
</header>