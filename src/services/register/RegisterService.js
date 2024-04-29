import axios from 'axios';
import { getApiUrl } from './../../config/config';

const RegisterService = {

  register: async (formData) => {
    return axios.post(getApiUrl('/register'), formData, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>"
      }
    });
  }
}

export default RegisterService;
