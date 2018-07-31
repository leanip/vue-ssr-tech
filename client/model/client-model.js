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
  })
}

export default {
  getAllTodos () {
    return handleRequest(request('/api/todos'))
  }
}
