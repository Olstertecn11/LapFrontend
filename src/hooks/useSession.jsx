
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/auth/AuthService";
import StoreManagment from '../helpers/StorageManagement.js';

const useSession = () => {
  const history = useNavigate();

  const verifySession = async () => {
    try {
      const userObject = JSON.parse(localStorage.getItem('session'));
      if (!userObject) {
        history('/');
        return;
      }

      const { idUsr, token } = userObject;
      const response = await authService.hasSession(idUsr, token);
      if (!response.exist) {
        history('/');
      }
      else {
        console.log('is logged');
      }
    } catch (error) {
      console.error('Error al verificar la sesión:', error);
    }
  };

  useEffect(() => {
    const sessionData = StoreManagment.getObject('session');
    if (sessionData !== null) {
      history('/')
    }
    verifySession();
  }, []);

  return verifySession;
};

export default useSession;

