<script>
  /** @type {string} */
  export let title;

  /** @type {string} */
  export let description;

  /** @type {string} */
  export let iconPath;
</script>

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