<script lang="ts">
  import { ABOUT_CONTENT } from '$lib/constants';
  import { SectionId } from '$lib/types';
</script>

<section id={SectionId.ABOUT} class="py-32 relative">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      
      <div class="relative group order-2 lg:order-1">
         <div class="absolute top-4 left-4 w-full h-full border-2 border-[#FF6600]/30 rounded-sm z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
         
         <div class="relative aspect-[4/5] md:aspect-square bg-[#0A0A0A] overflow-hidden z-10 grayscale hover:grayscale-0 transition-all duration-700 ease-out">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" 
              alt="Modern Office Architecture" 
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-[#FF6600]/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
         </div>
      </div>

      <div class="order-1 lg:order-2">
        <span class="text-[#FF6600] font-mono text-sm tracking-widest uppercase mb-4 block">Tentang Kami</span>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          {ABOUT_CONTENT.title} <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Masa Depan.</span>
        </h2>
        
        <div class="space-y-6 text-slate-400 text-lg leading-relaxed font-light">
          <p>{ABOUT_CONTENT.text1}</p>
          <p>{ABOUT_CONTENT.text2}</p>
          <p>{ABOUT_CONTENT.text3}</p>
        </div>

        <div class="grid grid-cols-4 gap-8 mt-12 pt-8 border-t border-white/10">
          {#each ABOUT_CONTENT.stats as stat}
            <div class="group cursor-default">
              <div class="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-[#FF6600] transition-colors">{stat.value}</div>
              <div class="text-xs text-slate-500 uppercase tracking-widest font-medium">{stat.label}</div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>