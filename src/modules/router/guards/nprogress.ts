import NProgress from 'nprogress'
import type { RouteLocationNormalized, Router } from 'vue-router'

export const nprogress = (router: Router) => {
  router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    if (to.path !== from.path)
      NProgress.start()
  })
  router.afterEach(() => { NProgress.done() })
}
