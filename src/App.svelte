<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Services from '$lib/components/Services.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Contact from '$lib/components/Contacts.svelte';

  let isContactModalOpen = $state(false);

  function toggleModal(val: boolean) {
    isContactModalOpen = val;
  }
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