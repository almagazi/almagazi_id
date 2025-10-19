<script>
  import FeatureCard from './FeatureCard.svelte';

  const features = [
    {
      title: 'Web Development',
      description: `Leveraging the power of SvelteKit, a modern and performant web
        development framework, we craft responsive and intuitive web
        applications. Combining it with Supabase, a robust and secure
        open-source backend-as-a-service platform, we deliver seamless and
        scalable solutions tailored to your business needs.`,
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
      title: 'Mobile App Development',
      description: `Transcending the boundaries of traditional web development, we harness
        the versatility of SvelteKit and the cross-platform capabilities of
        Capacitor.js to create captivating and feature-rich mobile
        applications. With a focus on performance and user experience, we
        deliver native-like experiences for both iOS and Android platforms.`,
      iconPath: `M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 
        2.25h7.5A2.25 2.25 0 0018 20.25V3.75A2.25 2.25 0 0015.75 
        1.5m-7.5 0v1.5m7.5-1.5v1.5m-7.5 0h7.5`
    },
    {
      title: 'ERP Implementation',
      description: `Streamline your business processes and unlock new levels of
        efficiency with my expertise in implementing industry-leading
        Enterprise Resource Planning (ERP) solutions. From IFS Applications
        to ERPNext, I guide you through the intricate implementation process,
        ensuring a smooth transition and optimal integration with your
        existing systems.`,
      iconPath: `M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M8.25 21h7.5M12 
        3v18m-3.75-6.75h.008v.008H8.25v-.008zm0 3h.008v.008H8.25v-.008zm0 
        3h.008v.008H8.25v-.008zm3-6h.008v.008H11.25v-.008zm0 3h.008v.008H11.25v-.008zm0 
        3h.008v.008H11.25v-.008zm3-6h.008v.008H14.25v-.008zm0 
        3h.008v.008H14.25v-.008zm0 3h.008v.008H14.25v-.008z`
    },
    {
      title: 'ERP Customization',
      description: `Tailor your ERP solutions to meet the unique demands of your business
        with my customization services for IFS Applications and ERPNext. We
        analyze your specific requirements and extend the functionality of
        these powerful platforms, delivering bespoke solutions that align
        perfectly with your operational needs.`,
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
      title: 'Database Optimization',
      description: `Unleash the full potential of your database systems with my expertise
        in optimizing Oracle, PostgreSQL, MariaDB, and MySQL databases.
        Through meticulous analysis and strategic fine-tuning, we ensure
        optimal performance, efficiency, and scalability, empowering your
        applications to operate at their peak.`,
      iconPath: `M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 
        6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 
        6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375`
    },
    {
      title: 'Database Migration',
      description: `Seamlessly transition your data and applications to new database
        environments with my comprehensive database migration services.
        Whether you're upgrading to a newer version, switching vendors, or
        consolidating databases, we meticulously plan and execute the
        migration process, ensuring data integrity and minimizing downtime.`,
      iconPath: `M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 
        18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z`
    },
    {
      title: 'App Design',
      description: `Crafting captivating and intuitive user experiences is at the core
        of my app design services. With a deep understanding of
        user-centered design principles and a keen eye for aesthetics, we
        create visually stunning and highly functional applications that
        elevate your brand and engage your users.`,
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
      title: 'Managed Hosting',
      description: `Ensure seamless and secure operations for your web and mobile
        applications with my managed hosting services. We leverage
        industry-leading hosting platforms and implement robust security
        measures, monitoring tools, and performance optimizations, allowing
        you to focus on your core business while leaving the technical
        infrastructure in my capable hands.`,
      iconPath: `M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 
        5.25 5.25 0 0110.33-2.33 4.5 4.5 0 011.41 8.775r0 0h-13.5z`
    }
  ];
</script>

<div class="dark:bg-gray-100 dark:text-gray-800" id="features">
  <div class="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl font-extrabold sm:text-4xl">Unleashing Digital Excellence</h2>
      <p class="mt-4 text-lg dark:text-gray-600">
        Empowering Businesses with Cutting-Edge Web, Mobile, Database, and ERP Services
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