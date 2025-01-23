import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  base: 'https://github.com/Abazarfard/copyst.git', // Replace 'your-repo-name' with your repository name
});