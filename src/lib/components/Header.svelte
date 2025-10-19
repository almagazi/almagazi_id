<script>
	import { page } from '$app/stores';
	import { onMount, tick } from 'svelte';

	let headerElement;

  function updateHeaderHeight() {
    if (headerElement) {
      const height = headerElement.offsetHeight;
      document.documentElement.style.setProperty('--header-height', `${height}px`);
    }
  }

  onMount(async () => {
    await tick(); 
    updateHeaderHeight();
  });

	let activeHash = $page.url.hash;
	$: activeHash = $page.url.hash;
	$: isHome = activeHash === '' || activeHash === '#';
</script>

<svelte:window on:resize={updateHeaderHeight} />
<header class="p-4 dark:bg-gray-100 dark:text-gray-800 sticky top-0" bind:this={headerElement}>
	<div class="container flex justify-between h-16 mx-auto">
		<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" class="flex items-center p-2">
			<img src="/logo-almagazi.svg" alt="logo Almagazi" class="w-16 h-16" />
		</a>
		<ul class="items-stretch hidden space-x-3 md:flex">
			<li class="flex">
				<a
					rel="noopener noreferrer"
					href="#"
					class="flex items-center px-4 -mb-1 border-b-2 dark:border-"
					class:dark:text-orange-600={isHome}
					class:dark:border-orange-600={isHome}
					on:click={() => (activeHash = '#')}
				>
					Home
				</a>
			</li>
			<li class="flex">
				<a
					rel="noopener noreferrer"
					href="#stack"
					class="flex items-center px-4 -mb-1 border-b-2 dark:border-"
					class:dark:text-orange-600={activeHash === '#stack'}
					class:dark:border-orange-600={activeHash === '#stack'}
					on:click={() => (activeHash = '#stack')}
				>
					Stack
				</a>
			</li>
			<li class="flex">
				<a
					rel="noopener noreferrer"
					href="#features"
					class="flex items-center px-4 -mb-1 border-b-2 dark:border-"
					class:dark:text-orange-600={activeHash === '#features'}
					class:dark:border-orange-600={activeHash === '#features'}
					on:click={() => (activeHash = '#features')}
				>
					Services
				</a>
			</li>
		</ul>
		<button class="flex justify-end p-4 md:hidden">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				></path>
			</svg>
		</button>
	</div>
</header>