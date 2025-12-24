/// <reference types="svelte" />
/// <reference types="vite/client" />

declare module '*.svg?component' {
	import type { ComponentType, SvelteComponent } from 'svelte';
	const content: ComponentType<SvelteComponent>;
	export default content;
}
