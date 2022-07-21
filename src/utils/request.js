import axios from 'axios'
import { Message } from 'element-ui'
const request = axios.create({
  // baseURL:''
  baseURL: process.env.VUE_APP_BASE_API
})

// 请求拦截器
request.interceptors.request.use()

// 响应拦截器
request.interceptors.response.use((response) => {
  // 赋值结构
  const { data: { data, message, success }} = response
  // 如果success成功返回正确的数据
  if (success) {
    return data
  }
  // 如果请求数据失败走到这里 提示错误信息，并且往下抛出错误
  Message.error(message || '系统错误')
  return Promise.reject(message || '系统错误')
})
export default request
