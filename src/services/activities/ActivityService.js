import axios from 'axios';
import { getApiUrl } from './../../config/config';

const ActivityService = {
  getAll: async () => {
    const apiUrl = getApiUrl('/activities')

    return axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>" // Aquí deberías incluir tu token de autorización si lo tienes
      }
    }).then(res => res.data).catch(err => console.log(err));
  }
}

export default ActivityService;
