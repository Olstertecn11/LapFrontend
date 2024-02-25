import axios from 'axios';
import { getApiUrl } from './../../config/config';

const AuthService = {
  login: async ({ username, password }) => {
    const apiUrl = getApiUrl('/auth')

    return axios.post(apiUrl, { username, password }, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>" // Aquí deberías incluir tu token de autorización si lo tienes
      }
    }).then(res => res.data)
  }
}

export default AuthService;
