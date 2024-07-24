import axios from 'axios';
import { getApiUrl } from './../../config/config';

const RegisterService = {

  register: async (formData) => {
    return axios.post(getApiUrl('/register/'), formData, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>"
      }
    }).then(response => response.data).catch(err => console.log(err));
  }
}

export default RegisterService;
