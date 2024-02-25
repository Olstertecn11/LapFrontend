import './styles/Login.css';
import logoLAP from './../assets/logoLAP.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AuthService from './../services/auth/AuthService';
import { Store } from 'react-notifications-component';
import Swal from 'sweetalert2'


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
    const { message, code, token } = response;
    if (code == 1) {
      history('/Bienvenida');
    }
    else {
      Swal.fire({
        title: 'Error!',
        text: 'Usuario Incorrecto',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
      setUser(empty_user);
    }
  }



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
                <label htmlFor="" className='mx-auto'>Usuario:</label>
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
                <label htmlFor="">Contraseña:</label>
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
      <img className='bg-image' src="https://science-teaching.org/wp-content/uploads/2022/12/stem-banner-que-es-educacion-stem.jpg" alt="" />
    </div>
  )
}


export default Login;
