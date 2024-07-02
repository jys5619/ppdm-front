import request from '@/app/axios/axios.config'

export type LoginVo = {
  email?: string
  password?: string
  remember?: boolean
}

export async function login(login: LoginVo) {
  return await request.post('/auths/signin', login)
}
