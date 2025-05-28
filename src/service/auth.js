import axios from "./axios"


// export default {
//   async register(data) {
//     const response = await axios.post('/register', data)
//     return response.data
//   },

//   async login(data) {
//     const response = await axios.post('/login', data)
//     return response.data
//   }
// }

const AuthService = {
  register(data) {
    return axios.post('/users', {user: data})
  },

  login(data) {
    return axios.post('/users/login', {user: data})
  },

  getCurrentUser() {
    return axios.get('/user')
  },
}

export default AuthService