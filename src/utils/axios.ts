import axios from 'axios'
import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

interface Result<T> {
  code: number
  message: string
  data: T
}

class Request {
  instance: AxiosInstance
  baseConfig: AxiosRequestConfig = { baseURL: import.meta.env.VITE_BASE_URL, timeout: 20 * 1000 }

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(Object.assign(this.baseConfig, config))

    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // TODO: 全局请求拦截器
        return config
      },
      (err: AxiosError) => {
        return Promise.reject(err)
      },
    )

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        // TODO: 全局响应拦截,暂定数据都在res.data里
        return res.data
      },
      (err: AxiosError) => {
        // TODO: 一些状态码处理，全局提示，例如500服务器错误
        return Promise.reject(err)
      },
    )
  }

  public request(config: InternalAxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.request(config)
  }

  public get<T = any>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Result<T>>> {
    return this.instance.get(url, config)
  }

  public post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Result<T>>> {
    return this.instance.post(url, data, config)
  }

  public put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Result<T>>> {
    return this.instance.put(url, data, config)
  }

  public delete<T = any>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Result<T>>> {
    return this.instance.delete(url, config)
  }
}

export default Request
