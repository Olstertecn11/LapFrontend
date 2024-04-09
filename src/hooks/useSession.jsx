
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/auth/AuthService";
import StoreManagment from '../helpers/StorageManagement.js';

const useSession = () => {
  const history = useNavigate();

  useEffect(() => {
    const verifySession = async () => {
      try {
        const sessionData = StoreManagment.getObject('session');
        console.log(sessionData);
        if (!sessionData) {
          history('/');
          return;
        }

        const { idUsr, token } = sessionData;
        const response = await authService.hasSession(idUsr, token);
        if (!response.exist) {
          history('/');
        } else {
          console.log('Usuario autenticado');
        }
      } catch (error) {
        console.error('Error al verificar la sesión:', error);
      }
    };

    verifySession();
  }, [history]);

  return null; // No necesitas devolver nada de este hook
};

export default useSession;

