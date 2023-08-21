// Import Plugins
import './assets/stylesheets/all.scss'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from "@vueuse/head"
import VueGtag from 'vue-gtag'

const app = createApp(App)
const head = createHead()

app.use(head)

app.use(VueGtag, {
  config: { id: "G-K8TH1VX1V2" }
})

app.use(router)

app.mount('#app')
