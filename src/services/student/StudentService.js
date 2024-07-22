import axios from 'axios';
import { getApiUrl } from './../../config/config';

const StudentService = {

  getAll: async () => {
    return axios.get(getApiUrl('/student'), {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>"
      }
    }).then(res => res).catch(res => console.log(res.msg));
  },
  getByClass: async (id_class) => {
    return axios.get(getApiUrl('/student/get-by-class'), { params: { id_class } }, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>"
      }
    }).then(res => res.data.response).catch(res => console.log(res.msg));
  }
}

export default StudentService;
