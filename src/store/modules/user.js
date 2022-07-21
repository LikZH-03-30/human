import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/user'
// 状态
const state = {
  token: getToken() // 初始化token
}

const mutations = {
  // 修改状态
  setToken(state, token) {
    state.token = token
    setToken(token) // 本地存储的设置token的方法 .>>从auth.js中引入
  },
  // 移除token
  removeToken(state) {
    state.token = null
    removeToken()
  }
}
// 执行异步
const actions = {
  // 登录请求 >> commit >> 交给 mutations修改
  async login(context, data) {
    const res = await login(data)
    console.log(res)
    context.commit('setToken', res)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
