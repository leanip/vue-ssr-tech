import axios from 'axios'
import { createError } from './util'

const request = axios.create({
  baseURL: '/'
})

const handleRequest = req => {
  return new Promise((resolve, reject) => {
    req.then(resp => {
      const data = resp.data
      if (!data) {
        return reject(createError(400, 'no data'))
      }
      if (!data.success) {
        return reject(createError(400, data.message))
      }
      resolve(data.data)
    })
      .catch(err => {
        const resp = err.response
        if (resp.status === 401) {
          reject(createError(401, '你得先登录啊'))
        }
      })
  })
}

export default {
  getAllTodos () {
    return handleRequest(request.get('/api/todos'))
  },
  login (username, password) {
    return handleRequest(request.post('/user/login', {
      username,
      password
    }))
  }
}
