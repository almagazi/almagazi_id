<script>
  import FeatureCard from './FeatureCard.svelte';

  const features = [
    {
      title: 'Pengembangan Web',
      description: `Memanfaatkan kekuatan SvelteKit, kerangka kerja pengembangan web modern dan berperforma tinggi, kami merancang aplikasi web yang responsif dan intuitif. Menggabungkannya dengan Supabase, platform backend-as-a-service open-source yang tangguh dan aman, kami memberikan solusi yang mulus dan skalabel yang disesuaikan dengan kebutuhan bisnis Anda.`,
      iconPath: `M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 
        01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 
        0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 
        017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 
        11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 
        8.959 0 0121 12c0 2.998-1.1 5.74-2.918 7.843m0-15.686a8.959 8.959 
        0 012.918 7.843c0 2.998-1.1 5.74-2.918 7.843m0 0A8.997 8.997 
        0 0112 21m-7.843-4.582A8.997 8.997 0 013 12c0-2.998 1.1-5.74 2.918-7.843`
    },
    {
      title: 'Pengembangan Aplikasi Seluler',
      description: `Melampaui batas-batas pengembangan web tradisional, kami memanfaatkan fleksibilitas SvelteKit dan kemampuan lintas platform Capacitor.js untuk menciptakan aplikasi seluler yang menawan dan kaya fitur. Dengan fokus pada kinerja dan pengalaman pengguna, kami memberikan pengalaman layaknya aplikasi asli untuk platform iOS dan Android.`,
      iconPath: `M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 
        2.25h7.5A2.25 2.25 0 0018 20.25V3.75A2.25 2.25 0 0015.75 
        1.5m-7.5 0v1.5m7.5-1.5v1.5m-7.5 0h7.5`
    },
    {
      title: 'Implementasi ERP',
      description: `Rampingkan proses bisnis Anda dan buka tingkat efisiensi baru dengan keahlian saya dalam mengimplementasikan solusi Enterprise Resource Planning (ERP) terkemuka di industri. Dari IFS Applications hingga ERPNext, saya memandu Anda melalui proses implementasi yang rumit, memastikan transisi yang lancar dan integrasi optimal dengan sistem Anda yang ada.`,
      iconPath: `M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M8.25 21h7.5M12 
        3v18m-3.75-6.75h.008v.008H8.25v-.008zm0 3h.008v.008H8.25v-.008zm0 
        3h.008v.008H8.25v-.008zm3-6h.008v.008H11.25v-.008zm0 3h.008v.008H11.25v-.008zm0 
        3h.008v.008H11.25v-.008zm3-6h.008v.008H14.25v-.008zm0 
        3h.008v.008H14.25v-.008zm0 3h.008v.008H14.25v-.008z`
    },
    {
      title: 'Kustomisasi ERP',
      description: `Sesuaikan solusi ERP Anda untuk memenuhi tuntutan unik bisnis Anda dengan layanan kustomisasi saya untuk IFS Applications dan ERPNext. Kami menganalisis kebutuhan spesifik Anda dan memperluas fungsionalitas platform hebat ini, memberikan solusi khusus yang selaras dengan kebutuhan operasional Anda.`,
      iconPath: `M9.594 3.94c.09-.542.56-1.003 1.11-1.003h2.593c.55 0 
        1.02.461 1.11 1.003l.071.446c.094.593.425 1.11.862 
        1.488l.007.006c.468.402 1.068.518 1.62.292l.44-.184c.552-.232 
        1.14-.09 1.487.301l2.013 2.013c.391.391.533.934.301 
        1.487l-.184.44c-.226.552-.11.1152.292 1.62l.006.007c.378.437.895.768 
        1.488.862l.446.071c.542.09 1.003.56 1.003 1.11v2.593c0 
        .55-.461 1.02-1.003 1.11l-.446.071c-.593.094-1.11.425-1.488.862l-.006.007c-.402.468-.518 
        1.068-.292 1.62l.184.44c.232.552.09 1.14-.301 1.487l-2.013 
        2.013c-.391.391-.934.533-1.487.301l-.44-.184c-.552-.226-1.152-.11-1.62.292l-.007.006c-.437.378-.768.895-.862 
        1.488l-.071.446c-.09.542-.56 1.003-1.11 1.003h-2.593c-.55 
        0-1.02-.461-1.11-1.003l-.071-.446c-.094-.593-.425-1.11-.862-1.488l-.007-.006c-.468-.402-1.068-.518-1.62-.292l-.44.184c-.552.232-1.14.09-1.487-.301l-2.013-2.013c-.391-.391-.533-.934-.301-1.487l.184-.44c.226-.552.11-1.152-.292-1.62l-.006-.007c-.378-.437-.895-.768-1.488-.862l-.446-.071c-.542-.09-1.003-.56-1.003-1.11V9.593c0-.55.461-1.02 
        1.003-1.11l.446-.071c.593-.094 1.11-.425 1.488-.862l.006-.007c.402-.468.518-1.068.292-1.62l-.184-.44c-.232-.552-.09-1.14.301-1.487l2.013-2.013c.391-.391.934-.533 
        1.487-.301l.44.184c.552.226 1.152.11 1.62-.292l.007-.006c.437-.378.768-.895.862-1.488l.071-.446zM12 
        15a3 3 0 100-6 3 3 0 000 6z`
    },
    {
      title: 'Optimasi Basis Data',
      description: `Maksimalkan potensi penuh sistem basis data Anda dengan keahlian saya dalam mengoptimalkan basis data Oracle, PostgreSQL, MariaDB, dan MySQL. Melalui analisis yang teliti dan penyesuaian strategis, kami memastikan kinerja, efisiensi, dan skalabilitas yang optimal, memberdayakan aplikasi Anda untuk beroperasi pada puncaknya.`,
      iconPath: `M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 
        6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 
        6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375`
    },
    {
      title: 'Migrasi Basis Data',
      description: `Transisikan data dan aplikasi Anda dengan mulus ke lingkungan basis data baru dengan layanan migrasi basis data komprehensif saya. Baik Anda meningkatkan ke versi yang lebih baru, beralih vendor, atau mengkonsolidasikan basis data, kami merencanakan dan melaksanakan proses migrasi dengan cermat, memastikan integritas data dan meminimalkan waktu henti.`,
      iconPath: `M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 
        18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z`
    },
    {
      title: 'Desain Aplikasi',
      description: `Menciptakan pengalaman pengguna yang menawan dan intuitif adalah inti dari layanan desain aplikasi saya. Dengan pemahaman mendalam tentang prinsip-prinsip desain yang berpusat pada pengguna dan ketajaman estetika, kami menciptakan aplikasi yang memukau secara visual dan sangat fungsional yang mengangkat merek Anda dan melibatkan pengguna Anda.`,
      iconPath: `M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 
        2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 
        15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.385m5.043 
        .025a15.994 15.994 0 01-1.622-3.385m3.388 1.62a15.998 15.998 0 00-3.388-1.62m-5.043 
        .025a15.994 15.994 0 01-1.622 3.385m3.388 1.62a15.998 15.998 0 003.388 
        1.62m5.043-.025a15.994 15.994 0 011.622 3.385m-3.388-1.62a15.998 
        15.998 0 00-3.388 1.62m-5.043-.025a15.994 15.994 0 01-1.622 
        3.385m7.742-3.385a15.995 15.995 0 01-.025 5.043m0 0a15.995 
        15.995 0 01-5.043.025m5.043-.025a15.995 15.995 0 01.025-5.043m0 
        0a15.995 15.995 0 015.043-.025m-5.043.025a15.995 15.995 0 01-.025-5.043`
    },
    {
      title: 'Hosting Terkelola',
      description: `Pastikan operasi yang mulus dan aman untuk aplikasi web dan seluler Anda dengan layanan hosting terkelola saya. Kami memanfaatkan platform hosting terkemuka di industri dan menerapkan langkah-langkah keamanan yang tangguh, alat pemantauan, dan optimasi kinerja, memungkinkan Anda untuk fokus pada bisnis inti Anda sementara menyerahkan infrastruktur teknis di tangan saya yang mampu.`,
      iconPath: `M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 
        5.25 5.25 0 0110.33-2.33 4.5 4.5 0 011.41 8.775r0 0h-13.5z`
    }
  ];
</script>

<div class="dark:bg-gray-100 dark:text-gray-800" id="features">
  <div class="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl font-extrabold sm:text-4xl">Mewujudkan Keunggulan Digital</h2>
      <p class="mt-4 text-lg dark:text-gray-600">
        Memberdayakan Bisnis dengan Layanan Web, Seluler, Basis Data, dan ERP Terkini
      </p>
    </div>
    <dl
      class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 
             sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8"
    >
      {#each features as feature}
        <FeatureCard
          title={feature.title}
          description={feature.description}
          iconPath={feature.iconPath}
        />
      {/each}
    </dl>
  </div>
</div>