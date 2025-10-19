import { writable } from 'svelte/store';

// This store will hold the state of our contact modal
export const contactModalOpen = writable(false);