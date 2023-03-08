import request from '~/utils/axios'

export const getUserDetail = (uid: string) => request.get('/user/detail', { params: { uid } })
