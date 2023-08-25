import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import htmlPlugin from 'vite-plugin-html-config'

const htmlPluginOpt = {
  title: '堤岸果園',
  metas: [
    {
      name: 'description',
      content: '位於溪流堤岸旁的果園，我們的主要水果是酪梨和芒果。',
    },
    {
      name: 'keywords',
      content: '堤岸果園,酪梨,芒果,水果,堤岸,果園',
    },
    {
      name: 'author',
      content: 'Gee Hsu'
    },
    // og
    {
      property: 'og:locale',
      content: 'zh_TW'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:title',
      content: '堤岸果園'
    },
    {
      property: 'og:description',
      content: '位於溪流堤岸旁的果園，我們的主要水果是酪梨和芒果。'
    },
    {
      property: 'og:site_name',
      content: '堤岸果園'
    },
    {
      property: 'og:url',
      content: 'https://geehsu.github.io/brinkorchard/'
    },
    {
      property: 'og:image',
      content: 'https://geehsu.github.io/brinkorchard/assets/hero-bef45373.jpg'
    },
    {
      property: 'og:image:width',
      content: '1200'
    },
    {
      property: 'og:image:height',
      content: '766'
    },
    {
      property: 'og:image:type',
      content: 'image/jpg'
    },
    {
      property: 'fb:app_id',
      content: '101917915461894'
    },
    {
      property: 'twitter:card',
      content: 'summary_large_image'
    }
  ],
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    [htmlPlugin(htmlPluginOpt)],
  ],
  base: '/brinkorchard/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  }
})
