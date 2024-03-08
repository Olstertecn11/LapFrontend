import axios from 'axios';
import { getApiUrl } from './../../config/config';

const FileService = {

  upload: async (id, formData) => {
    console.log(getApiUrl('/upload') + `&id=${id}`);
    return axios.post(getApiUrl('/upload') + `&id=${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  getFiles: async () => {
    console.log(getApiUrl('/pdfs'));
    return axios.get(getApiUrl('/pdfs'), {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>"
      }
    }).then(res => res.data).catch(err => console.log(err));
  }
}

export default FileService;
