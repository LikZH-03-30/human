import Cookies from 'js-cookie'

// cookie
// 怎么操作cookie 因为操作cookie比较麻烦要操作dom 获取的时候要document.....
// 所有我们使用第三方插件 js-cookie 会比较方便

const TokenKey = 'hrsass_token' // token的key

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
