import './styles/Login.css';
import logoLAP from './../assets/logoLAP.png';
import loginBackground from '../assets/loginBackground.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AuthService from './../services/auth/AuthService';
import Swal from 'sweetalert2'
import StoreManagment from '../helpers/StorageManagement.js';


const Login = () => {

  const history = useNavigate();
  const empty_user = { username: '', password: '' };
  const [user, setUser] = useState(empty_user);





  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const sendForm = async () => {
    const response = await AuthService.login(user);
    console.log(response);
    const code = response.result;
    const token = response.token_val;
    const idUsr = response.id_usr;
    const role = response.credentials;
    const username = response.username;
    const img = response.img;
    const sessionData = {
      idUsr,
      token,
      role,
      username,
      img
    };
    localStorage.setItem('session', JSON.stringify(sessionData));
    if (code == 3) {
      history('/Bienvenida');
    }
    else {
      if (code == 0) {
        Swal.fire({
          title: 'Error!',
          text: 'Usuario Incorrecto',
          icon: 'error',
          confirmButtonText: 'Cool'
        });
      }
      else {
        Swal.fire({
          title: 'Error!',
          text: 'Contraseña Incorrecta',
          icon: 'error',
          confirmButtonText: 'Cool'
        });

      }
    }
    setUser(empty_user);
  }



  const checkActiveSession = async (id) => {
    const response = await AuthService.hasActiveSession(id);
    const { exist } = response;
    if (exist) {
      history('/Dashboard');
    }
  }

  useEffect(() => {
    const sessionData = StoreManagment.getObject('session');
    if (sessionData !== null) {
      const { idUsr } = sessionData;
      checkActiveSession(idUsr);
    }
  }, [])



  return (
    <div className='logn-box'>
      <div className="container logn-container">
        <div className="row">
          <div className="col-md-5 logn-image-column">
            <img src={logoLAP} alt="Logo" />
          </div>
          <div className="col-md-5 logn-form-column">
            <div className="card card-body">
              <div className="form-group">
                <label htmlFor="" className='mx-auto'>Usuario</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Ingrese su usuario"
                  className="form-control"
                  value={user.username}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Ingrese su contraseña"
                  className="form-control"
                  value={user.password}
                  onChange={handleChange}
                />
              </div>
              <Link className='text-right text-white  txt-link'>Olvidé mi contraseña</Link>
              <button className='btn btn-blue mt-4' onClick={sendForm}>Ingresar</button>
            </div>
          </div>
        </div>
      </div>
      <img className='bg-image' src={loginBackground} alt="" />
    </div>
  )
}


export default Login;
