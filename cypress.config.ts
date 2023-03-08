import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3333',
    chromeWebSecurity: false,
    specPattern: 'src/**/__test__/**/*.e2e.*',
    supportFile: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false,
  },

  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
    specPattern: 'src/**/__test__/**/*.cy.*',
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
})
