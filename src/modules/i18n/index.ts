import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
const messages = Object.fromEntries(
  Object.entries(
    import.meta.glob<{ default: any }>('../../../locales/*.y(a)?ml', { eager: true }))
    .map(([key, value]) => {
      const yaml = key.endsWith('.yaml')
      return [key.slice(14, yaml ? -5 : -4), value.default]
    }),
)

export const install = (app: App) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'es/en',
    messages,
  })
  app.use(i18n)
}
