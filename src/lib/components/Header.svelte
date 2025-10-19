<script>
	import { page } from '$app/stores';
	import { onMount, tick } from 'svelte';
	import { fly } from 'svelte/transition'; // Import transition

	let headerElement;
	let menuOpen = false; // State for the mobile menu
	let y = 0; // Track scroll position

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
	$: scrolled = y > 0; // True if page is scrolled

	// Close menu when a link is clicked
	function handleLinkClick(hash) {
		activeHash = hash;
		menuOpen = false;
	}
</script>

<svelte:window on:resize={updateHeaderHeight} bind:scrollY={y} />
<header
	class="p-4 dark:bg-gray-100 dark:text-gray-800 sticky top-0 z-20 
				 transition-shadow duration-300"
	class:shadow-md={scrolled}
	bind:this={headerElement}
>
	<div class="container flex justify-between h-16 mx-auto">
		<a
			rel="noopener noreferrer"
			href="#"
			aria-label="Back to homepage"
			class="flex items-center p-2"
			on:click={() => handleLinkClick('#')}
		>
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
					on:click={() => handleLinkClick('#')}
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
					on:click={() => handleLinkClick('#stack')}
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
					on:click={() => handleLinkClick('#features')}
				>
					Services
				</a>
			</li>
		</ul>
		<button
			class="flex justify-end p-4 md:hidden"
			on:click={() => (menuOpen = true)}
			aria-label="Open menu"
		>
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

{#if menuOpen}
	<div
		class="fixed inset-0 z-50 flex flex-col items-center justify-center space-y-8 
					 bg-gray-100 text-2xl"
		transition:fly={{ y: -200, duration: 300 }}
	>
		<button
			class="absolute top-0 right-0 p-8"
			on:click={() => (menuOpen = false)}
			aria-label="Close menu"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-8 h-8"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>

		<a rel="noopener noreferrer" href="#" on:click={() => handleLinkClick('#')}>
			Home
		</a>
		<a rel="noopener noreferrer" href="#stack" on:click={() => handleLinkClick('#stack')}>
			Stack
		</a>
		<a rel="noopener noreferrer" href="#features" on:click={() => handleLinkClick('#features')}>
			Services
		</a>
	</div>
{/if}