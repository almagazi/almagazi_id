import { mount } from 'svelte'
import './app.css' // Pastikan file css ini dibuat atau gunakan style global di index.html
import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('root')!,
})

export default app