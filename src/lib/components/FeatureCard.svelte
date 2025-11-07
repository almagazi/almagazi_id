<script>
  import { contactModalOpen } from '$lib/stores.js';

  /** @type {string} */
  export let title;

  /** @type {string} */
  export let description;

  /** @type {string} */
  export let iconPath;

  /** @type {string | null} */
  export let href = null;

  /** @type {boolean} */
  export let clickable = false;

  /** @type {boolean} */
  export let openContactModal = false;

  function handleClick() {
    if (openContactModal) {
      contactModalOpen.set(true);
    }
  }
</script>

{#if href}
  <a
    href={href}
    class="flex p-6 bg-white rounded-lg shadow-md
           transition-all duration-300 hover:shadow-lg hover:scale-105
           group no-underline {clickable ? 'cursor-pointer' : ''}"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="flex-shrink-0 w-6 h-6 dark:text-orange-600
             transition-transform duration-300 group-hover:scale-110"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d={iconPath} />
    </svg>
    <div class="ml-3">
      <dt class="text-lg font-medium text-gray-900">{title}</dt>
      <dd class="mt-2 text-gray-600">{description}</dd>
    </div>
  </a>
{:else if openContactModal}
  <div
    class="flex p-6 bg-white rounded-lg shadow-md
           transition-all duration-300 hover:shadow-lg hover:scale-105
           cursor-pointer group"
    on:click={handleClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="flex-shrink-0 w-6 h-6 dark:text-orange-600
             transition-transform duration-300 group-hover:scale-110"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d={iconPath} />
    </svg>
    <div class="ml-3">
      <dt class="text-lg font-medium text-gray-900">{title}</dt>
      <dd class="mt-2 text-gray-600">{description}</dd>
    </div>
  </div>
{:else}
  <div
    class="flex p-6 bg-white rounded-lg shadow-md
           transition-shadow duration-300 hover:shadow-lg"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="flex-shrink-0 w-6 h-6 dark:text-orange-600"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d={iconPath} />
    </svg>
    <div class="ml-3">
      <dt class="text-lg font-medium">{title}</dt>
      <dd class="mt-2 dark:text-gray-600">{description}</dd>
    </div>
  </div>
{/if}