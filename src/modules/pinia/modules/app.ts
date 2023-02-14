import { defineStore } from 'pinia'

interface AppState {
  // 皮肤
  theme: string
}

const useAppStore = defineStore('app', {
  state: (): AppState => ({
    // 皮肤
    theme: 'red',
  }),
  getters: {},
  actions: {
    setTheme(data: string) {
      this.theme = data
    },
  },
})

export default useAppStore
