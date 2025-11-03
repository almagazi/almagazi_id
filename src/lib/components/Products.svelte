<script>
  import FeatureCard from './FeatureCard.svelte';

  const products = [
    {
      title: 'Maragha',
      description: `Platform gotong royong literasi untuk merawat Warisan Intelektual Islam. 
        Kami menerjemahkan naskah klasik Arab secara kolaboratif untuk membangun 
        perpustakaan digital yang dapat diakses oleh generasi mendatang.`,
      // Ikon untuk 'buku' atau 'perpustakaan' (Heroicon: book-open)
      iconPath: `M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 
        8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 
        016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 
        0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25`
    },
    {
      title: 'Sistem Keuangan Perusahaan Jasa',
      description: `Solusi SaaS modern untuk mengelola keuangan perusahaan jasa. 
        Lacak proyek, kelola tagihan (invoicing), dan pantau profitabilitas dengan mudah. 
        Didesain untuk agensi, konsultan, dan pekerja jasa.`,
      // Ikon untuk 'jasa' atau 'bisnis' (Heroicon: brief-case)
      iconPath: `M11.25 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0011.25 9zM12.75 
        3a.75.75 0 00-1.5 0v2.25A.75.75 0 0012 6h.75a.75.75 0 000-1.5H12V3zM3.75 
        3a.75.75 0 000 1.5h.75a.75.75 0 000-1.5H3.75zM5.25 
        4.5a.75.75 0 000 1.5h.75a.75.75 0 000-1.5H5.25zM3.75 
        7.5a.75.75 0 000 1.5h.75a.75.75 0 000-1.5H3.75zM5.25 
        9a.75.75 0 000 1.5h.75a.75.75 0 000-1.5H5.25zM3.75 
        12a.75.75 0 000 1.5h.75a.75.75 0 000-1.5H3.75zM5.25 
        13.5a.75.75 0 000 1.5h.75a.75.75 0 000-1.5H5.25zM3.75 
        16.5a.75.75 0 000 1.5h.75a.75.75 0 000-1.5H3.75zM5.25 
        18a.75.75 0 000 1.5h.75a.75.75 0 000-1.5H5.25zM7.5 
        3a.75.75 0 000 1.5h.75a.75.75 0 000-1.5H7.5zM9 
        4.5a.75.75 0 000 1.5h.75a.75.75 0 000-1.5H9zM7.5 
        7.5a.75.75 0 000 1.5h.75a.75.75 0 000-1.5H7.5zM9 
        9a.75.75 0 000 1.5h.75a.75.75 0 000-1.5H9zM7.5 
        12a.75.75 0 000 1.5h.75a.75.75 0 000-1.5H7.5zM9 
        13.5a.75.75 0 000 1.5h.75a.75.75 0 000-1.5H9zM7.5 
        16.5a.75.75 0 000 1.5h.75a.75.75 0 000-1.5H7.5zM9 
        18a.75.75 0 000 1.5h.75a.75.75 0 000-1.5H9zM14.25 
        3a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM15.75 
        4.5a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM14.25 
        7.5a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM15.75 
        9a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM14.25 
        12a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM15.75 
        13.5a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM14.25 
        16.5a.75.75 0 000 1.5h.75a.75.75 0 000-1.s.75zM15.75 
        18a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM18 
        3a.75.75 0 000 1.5h.75a.75.75 0 000-1.5H18zM19.5 
        4.5a.75.75 0 000 1.5h.75a.75.75 0 000-1.5H19.5zM18 
        7.5a.75.75 0 000 1.5h.75a.75.75 0 000-1.5H18zM19.5 
        9a.75.75 0 000 1.5h.75a.75.75 0 000-1.5H19.5zM18 
        12a.75.75 0 000 1.5h.75a.75.75 0 000-1.5H18zM19.5 
        13.5a.75.75 0 000 1.5h.75a.75.75 0 000-1.5H19.5zM18 
        16.5a.75.75 0 000 1.5h.75a.75.75 0 000-1.5H18zM19.5 
        18a.75.75 0 000 1.5h.75a.75.75 0 000-1.5H19.5z`
    },
    {
      title: 'Sistem Keuangan Non Profit',
      description: `Aplikasi keuangan khusus untuk organisasi nirlaba 
        (Yayasan, Perkumpulan, NGO). Memastikan kepatuhan ISAK 35 dan manajemen ZISWAF. 
        Transparansi dan akuntabilitas dalam satu platform.`,
      // Ikon untuk 'amal' atau 'nirlaba' (Heroicon: heart)
      iconPath: `M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 
        2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 
        8.25c0 7.22 9 12 9 12s9-4.78 9-12z`
    }
  ];
</script>

<div class="dark:bg-gray-100 dark:text-gray-800" id="products">
  <div class="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl font-extrabold sm:text-4xl">Produk Kami</h2>
      <p class="mt-4 text-lg dark:text-gray-600">
        Solusi siap pakai untuk mengakselerasi bisnis dan organisasi Anda.
      </p>
    </div>
    <dl
      class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 
             sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8"
    >
      {#each products as product}
        <FeatureCard
          title={product.title}
          description={product.description}
          iconPath={product.iconPath}
        />
      {/each}
    </dl>
  </div>
</div>