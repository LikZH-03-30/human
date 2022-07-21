import request from '@/utils/request'

// import request from "@/utils/request";

export function login(data) {
  return request({
    method: 'POST',
    url: '/sys/login',
    data
  })
}

export function getInfo() {
}

export function logout() {
}
