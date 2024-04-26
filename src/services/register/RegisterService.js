import axios from 'axios';
import { getApiUrl } from './../../config/config';

const RegisterService = {

  register: async (formData) => {
    return axios.post(getApiUrl('/register'), formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
}

export default RegisterService;
