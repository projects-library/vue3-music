import NProgress from 'nprogress'

export const install = ({ router }: any) => {
  router.beforeEach((to: { path: any }, from: { path: any }) => {
    if (to.path !== from.path)
      NProgress.start()
  })
  router.afterEach(() => { NProgress.done() })
}
