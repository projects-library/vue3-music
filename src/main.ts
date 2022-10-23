import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'
import modulesInstallFns from './modules'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
modulesInstallFns.forEach((fn) => {
  fn({ app, isClient: true, router, base: import.meta.env.BASE_URL })
})
app.use(router)
app.mount('#app')
