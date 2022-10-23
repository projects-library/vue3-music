import type { Router } from 'vue-router'
import { nprogress } from './nprogress'

const initGuards = (router: Router) => {
  nprogress(router)
}

export default initGuards
