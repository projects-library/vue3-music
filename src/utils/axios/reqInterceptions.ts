import type { InternalAxiosRequestConfig } from 'axios'

const defaultRequestInterception = (config: InternalAxiosRequestConfig) => {
  // TODO: 全局请求拦截器: 添加token
  return config
}

export {
  defaultRequestInterception,
}
