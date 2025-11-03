<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { onMount } from 'svelte';

  let statsElement;
  let hasAnimated = false;

  const duration = 1500;
  const easing = cubicOut;

  // Set 4 angka
  const clients = tweened(0, { duration, easing });
  const experience = tweened(0, { duration, easing });
  const remote = tweened(0, { duration, easing });
  const industries = tweened(0, { duration, easing }); // <-- Statistik baru

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          clients.set(50);
          experience.set(25);
          remote.set(16);
          industries.set(15);
          hasAnimated = true;
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
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
  <div class="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 pt-10 pb-12">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl font-extrabold sm:text-4xl">Rekam Jejak Kami</h2>
      <p class="mt-4 text-lg dark:text-gray-600">
        Kekuatan kami bukanlah usia perusahaan, melainkan pengalaman kolektif dan
        puluhan proyek yang telah ditangani oleh tim inti kami.
      </p>
    </div>
  </div>
  <div
    class="container mx-auto grid justify-center grid-cols-2 text-center 
           lg:grid-cols-4 pt-0"
  >
    <div class="flex flex-col justify-start m-2 lg:m-6">
      <p class="text-4xl font-bold leading-none lg:text-6xl">
        {Math.round($clients)}+
      </p>
      <p class="text-sm sm:text-base">Klien Telah Ditangani</p>
    </div>
    <div class="flex flex-col justify-start m-2 lg:m-6">
      <p class="text-4xl font-bold leading-none lg:text-6xl">
        {Math.round($experience)}+
      </p>
      <p class="text-sm sm:text-base">Tahun Pengalaman Tim</p>
    </div>
    <div class="flex flex-col justify-start m-2 lg:m-6">
      <p class="text-4xl font-bold leading-none lg:text-6xl">
        {Math.round($remote)}+
      </p>
      <p class="text-sm sm:text-base">Tahun Pengalaman Kerja Remote</p>
    </div>
    <div class="flex flex-col justify-start m-2 lg:m-6">
      <p class="text-4xl font-bold leading-none lg:text-6xl">
        {Math.round($industries)}+
      </p>
      <p class="text-sm sm:text-base">Industri Dilayani</p>
    </div>
  </div>
</section>