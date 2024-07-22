import axios from 'axios';
import { getApiUrl } from './../../config/config';

const apiUrl = getApiUrl('/class')
const ClassService = {

  getAll: async () => {

    return axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>"
      }
    }).then(res => res.data).catch(err => console.log(err));
  },
  getByTeacher: async (idUser) => {
    return axios.get(getApiUrl('/class/find'), {
      params: {
        id: idUser
      },
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>"
      }
    }).then(res => res.data).catch(err => console.log(err));
  },
  getById: async (Id) => {
    return axios.get(getApiUrl('/class/find-by-id'), {
      params: {
        id: Id
      },
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>"
      }
    }).then(res => res.data).catch(err => console.log(err));
  },
  create: async ({ degree, subject, teacher }) => {
    return axios.post(apiUrl, { degree, subject, teacher }, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>"
      }
    }).then(res => res.data).catch(err => console.log(err));
  },
  delete: async (Id) => {
    return axios.delete(apiUrl + `&id=${Id}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>"
      }
    }).then(res => res.data).catch(err => console.log(err));
  }
}

export default ClassService;
