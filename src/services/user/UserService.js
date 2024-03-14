import axios from 'axios';
import { getApiUrl } from './../../config/config';

const apiUrl = getApiUrl('/user')
const UserService = {

  create: async ({ name, surname, username, password, email, phone, dpi, privileges }) => {

    return axios.post(apiUrl, { name, surname, username, password, email, phone, dpi, privileges }, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>" // Aquí deberías incluir tu token de autorización si lo tienes
      }
    }).then(res => res.data).catch(err => console.log(err));
  },
  delete: async (idUser) => {
    return axios.delete(apiUrl + `&id=${idUser}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>" // Aquí deberías incluir tu token de autorización si lo tienes
      }
    }).then(res => res.data).catch(err => console.log(err));
  },
  getAll: async () => {
    return axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>"
      }
    }).then(res => res.data).catch(err => console.log(err));
  }
}

export default UserService;
