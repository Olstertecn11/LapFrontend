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
    console.log(idUser);
    console.log('fkdajlkj');;
    return axios.get(getApiUrl('/class/find'), {
      params: {
        id: idUser
      },
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>"
      }
    }).then(res => res.data).catch(err => console.log(err));
  }
}

export default ClassService;
