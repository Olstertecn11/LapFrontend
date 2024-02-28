import axios from 'axios';
import { getApiUrl } from './../../config/config';

const apiUrl = getApiUrl('/auth')
const AuthService = {

  login: async ({ username, password }) => {

    return axios.post(apiUrl, { username, password }, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>" // Aquí deberías incluir tu token de autorización si lo tienes
      }
    }).then(res => res.data).catch(err => console.log(err));
  },
  logout: async (idUser) => {
    try {
      const response = await axios.delete(apiUrl + `&id=${idUser}`);
      return response.data;
    } catch (error) {
      console.error('Error en la solicitud DELETE:', error);
      throw error; // Re-lanzar el error para que pueda ser manejado fuera de esta función
    }
  }


}

export default AuthService;
