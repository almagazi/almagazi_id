<script lang="ts">
	import { HERO_CONTENT } from '$lib/constants';
	import { SectionId } from '$lib/types';
	import { ArrowRight, Code } from 'lucide-svelte';

	function scrollToProjects() {
		document.getElementById(SectionId.PROJECTS)?.scrollIntoView({ behavior: 'smooth' });
	}

	function scrollToServices() {
		document.getElementById(SectionId.SERVICES)?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<section id={SectionId.HOME} class="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-black">
  <div class="absolute inset-0 grid-bg opacity-40 pointer-events-none"></div>
  
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF6600]/10 rounded-full blur-[120px] pointer-events-none"></div>

  <div class="max-w-6xl mx-auto px-6 relative z-10">
    <div class="flex flex-col items-center text-center">
      
      <div class="mb-8 animate-slide-up [animation-delay:0ms] opacity-0">
        <span class="px-4 py-1.5 rounded-full border border-[#FF6600]/30 bg-[#FF6600]/5 text-[#FF6600] text-xs font-medium tracking-widest uppercase">
          {HERO_CONTENT.greeting}
        </span>
      </div>

      <h1 class="text-5xl md:text-8xl font-bold text-white mb-8 leading-tight tracking-tight animate-slide-up [animation-delay:200ms] opacity-0">
        {HERO_CONTENT.name} <br class="hidden md:block"/>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6600] to-[#FF8533]">
          {HERO_CONTENT.title}.
        </span>
      </h1>

      <p class="text-lg md:text-2xl text-slate-400 mb-12 max-w-2xl leading-relaxed font-light animate-slide-up [animation-delay:400ms] opacity-0">
        <span class="text-slate-500">{HERO_CONTENT.description}</span>
      </p>

      <div class="flex flex-col sm:flex-row gap-6 animate-slide-up [animation-delay:600ms] opacity-0">
        <button 
          onclick={scrollToProjects}
          class="group px-8 py-4 bg-[#FF6600] hover:bg-[#FF8533] text-white hover:text-black font-bold text-sm tracking-widest uppercase transition-all duration-300 rounded-sm flex items-center gap-3"
        >
          Lihat Portofolio
          <ArrowRight size={18} class="group-hover:translate-x-1 transition-transform" />
        </button>
        
        <button 
          onclick={scrollToServices}
          class="group px-8 py-4 bg-transparent hover:bg-white/5 border border-white/20 hover:border-white text-white font-bold text-sm tracking-widest uppercase transition-all duration-300 rounded-sm flex items-center gap-3"
        >
          <Code size={18} class="text-[#FF6600]" />
          Layanan Kami
        </button>
      </div>
    </div>
  </div>
  
  <div class="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 opacity-50">
    <div class="w-[1px] h-24 bg-gradient-to-b from-transparent via-[#FF6600] to-transparent"></div>
    <span class="text-[10px] uppercase tracking-[0.3em] text-[#FF6600] rotate-90 origin-left translate-x-2">Scroll</span>
  </div>
</section>