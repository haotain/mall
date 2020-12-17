import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
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

export function localRequest(config) {
  const localInstance = axios.create({
    baseURL: 'http://www.kincustom.cn',
    timeout: 50000
  })

  localInstance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })
  localInstance.interceptors.response.use(res => {
    return res.data
  }, res => {
    console.log(res)
  })

  return localInstance(config);
}
