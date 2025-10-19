<script>
  import "../app.css";
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ContactModal from '$lib/components/ContactModal.svelte';
</script>

<Header />
<slot />
<Footer/>
<ContactModal />