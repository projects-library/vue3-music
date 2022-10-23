import { createApp } from 'vue'
import App from './App.vue'
import installPlugins from './modules'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

function bootstrap() {
  const app = createApp(App)
  installPlugins(app)
  app.mount('#app')
}

bootstrap()
