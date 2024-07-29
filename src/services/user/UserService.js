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
    }).then(res => res).catch(err => console.log(err));
  },
  getAll: async () => {
    return axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>"
      }
    }).then(res => res.data.data).catch(err => console.log(err));
  },
  getAllVW: async () => {
    return axios.get(getApiUrl('/vw'), {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>"
      }
    }).then(res => res.data.data).catch(err => console.log(err));
  },
  getAttributes: async (idUser) => {
    return axios.get(getApiUrl('/user/profile'), {
      params: {
        idUser: idUser
      },
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>"
      }
    }).then(res => res.data.data).catch(err => console.log(err));
  },
  updateAttributes: async (idUser, name, surname, dpi, phone, img) => {
    return axios.post(getApiUrl('/user/profile'), { name, surname, id: idUser, dpi, phone, img }, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>"
      }
    }).then(res => res.data).catch(err => console.log(err));

  }
}

export default UserService;
