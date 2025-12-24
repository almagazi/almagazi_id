<script lang="ts">
  import { PROJECTS } from '$lib/constants';
  import { SectionId } from '$lib/types';
  import { ArrowUpRight } from 'lucide-svelte';

  let { onOpenContact } = $props();

  function handleProjectClick(e: MouseEvent, link: string) {
    if (link === '#') {
      e.preventDefault();
      onOpenContact();
    }
  }
</script>

<section id={SectionId.PROJECTS} class="py-32 bg-black relative">
  <div class="max-w-7xl mx-auto px-6 mb-20 flex flex-col md:flex-row justify-between items-end gap-6">
    <div>
      <span class="text-[#FF6600] font-mono text-sm tracking-widest uppercase mb-4 block">Produk Unggulan</span>
      <h2 class="text-4xl md:text-5xl font-bold text-white">Karya Terbaru</h2>
    </div>
    <a 
      href="https://github.com/almagazi" 
      target="_blank"
      rel="noopener noreferrer"
      class="text-slate-400 hover:text-[#FF6600] transition-colors flex items-center gap-2 text-sm uppercase tracking-widest border-b border-slate-700 hover:border-[#FF6600] pb-1"
    >
      Lihat GitHub <ArrowUpRight size={16} />
    </a>
  </div>

  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
      {#each PROJECTS as project}
        <a 
          href={project.link}
          target={project.link.startsWith('http') ? "_blank" : undefined}
          rel={project.link.startsWith('http') ? "noopener noreferrer" : undefined}
          onclick={(e) => handleProjectClick(e, project.link)}
          class="group relative bg-[#0A0A0A] hover:bg-[#1a1a1a] border border-white/5 hover:border-[#FF6600]/50 transition-all duration-500 flex flex-col h-full min-h-[500px] overflow-hidden rounded-sm"
        >
          <div class="aspect-[16/9] w-full overflow-hidden relative flex-shrink-0">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div class="w-16 h-16 bg-[#FF6600] rounded-full flex items-center justify-center text-black transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                <ArrowUpRight size={32} />
              </div>
            </div>
          </div>

          <div class="p-10 flex flex-col flex-grow">
            <div class="flex flex-wrap gap-3 mb-6">
              {#each project.tags as tag}
                <span class="text-xs font-medium uppercase tracking-wider px-3 py-1.5 bg-white/5 text-slate-300 border border-white/5 group-hover:border-white/10 transition-colors">
                  {tag}
                </span>
              {/each}
            </div>
            
            <h3 class="text-3xl font-bold text-white mb-4 group-hover:text-[#FF6600] transition-colors">
              {project.title}
            </h3>
            
            <p class="text-slate-400 text-lg leading-relaxed mb-8 flex-grow">
              {project.description}
            </p>
            
            <div class="flex items-center gap-2 text-[#FF6600] text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              Lihat Detail <ArrowUpRight size={16} />
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>