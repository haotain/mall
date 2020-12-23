import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: '127.0.0.1',
    timeout: 50000
  })

  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })
  instance.interceptors.response.use(res => {
    return res.data
  }, res => {
    console.log(res)
  })

  return instance(config);
}
