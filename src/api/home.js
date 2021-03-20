import { post } from '@/utils/request'

export const getHomeData = (data = {}) => {
  return post('home/list', data)
}
