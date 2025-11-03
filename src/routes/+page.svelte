<script>
  import Hero from '$lib/components/Hero.svelte'
  import Features from '$lib/components/Features.svelte'
  import Stacks from '$lib/components/Stacks.svelte'
  import Stats from '$lib/components/Stats.svelte'
  import Products from '$lib/components/Products.svelte';
</script>
<div class="flex flex-col space-y-16 md:space-y-24">
  <Hero />
  <Stacks/>
  <Features />
  <Products />
  <Stats />
</div>
