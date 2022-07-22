import axios, { type AxiosError } from 'axios'

const request = axios.create({
  baseURL: '/api',
})

request.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    handleErrors(error)
    return Promise.reject(error)
  }
)

function handleErrors(error: AxiosError) {
  if (error.response) {
    console.log(error.response.data)
    console.log(error.response.status)
    console.log(error.response.headers)
  } else if (error.request) {
    console.log(error.request)
  } else {
    console.log('Error', error.message)
  }
  console.log(error.config)
}

export default request
