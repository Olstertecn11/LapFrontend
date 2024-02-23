import './styles/Login.css';
import logoLAP from './../assets/logoLAP.png';
import { Link } from 'react-router-dom';


const Login = () => {
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
                <input type="text" placeholder="olster" className="form-control" />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="">Contraseña</label>
                <input type="password" placeholder="*************" className="form-control" />
              </div>
              <Link className='text-right text-white  txt-link'>Olvidé mi contraseña</Link>
              <button className='btn btn-blue mt-4'>Login</button>
            </div>
          </div>
        </div>
      </div>
      <img className='bg-image' src="https://science-teaching.org/wp-content/uploads/2022/12/stem-banner-que-es-educacion-stem.jpg" alt="" />
    </div>
  )
}


export default Login;
