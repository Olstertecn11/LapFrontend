import axios from 'axios';
import { getApiUrl } from './../../config/config';

const apiUrl = getApiUrl('/activities')

const ActivityService = {

  getAll: async () => {
    return axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>" // Aquí deberías incluir tu token de autorización si lo tienes
      }
    }).then(res => res.data).catch(err => console.log(err));
  },
  getImagesFromActivity: async (id) => {
    const url = getApiUrl(`/activities/images`);
    return axios.get(url, {
      params: {
        idActivity: id
      },
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>" // Aquí deberías incluir tu token de autorización si lo tienes
      }
    })
      .then(res => res.data)
      .catch(err => console.log(err));
  },
  createActivity: async ({ name, description, date }) => {
    return axios.post(apiUrl, { name, description, date },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.data).catch(err => console.log(err))
  }
}

export default ActivityService;
