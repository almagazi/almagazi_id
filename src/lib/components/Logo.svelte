<script lang="ts">
	import almagaziLogo from '$assets/almagazi.svg';
	let { class: className = '', ...props } = $props();
</script>

<img src={almagaziLogo} alt="Almagazi Logo" class={className} {...props} />
