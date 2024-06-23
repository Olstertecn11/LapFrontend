import axios from 'axios';
import { getApiUrl } from './../../config/config';

const apiUrl = getApiUrl('/comments')
const CommentsService = {
  getByClassAndPdf: async (idClass, idPdf) => {
    return axios.get(apiUrl, {
      params: {
        idClass: idClass,
        idPdf: idPdf
      },
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>"
      }
    }).then(res => res.data).catch(err => console.log(err));
  },
  create: async (content, file, user, _class) => {
    return axios.post(apiUrl, { content, file, user, _class }, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>"
      }
    }).then(res => res.data).catch(err => console.log(err));
  },
  delete: async (Id) => {
  }
}

export default CommentsService;
