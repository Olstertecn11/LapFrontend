import './styles/Login.css';
import logoLAP from './../assets/logoLAP.png';


const Login = () => {
  return (
    <div className='logn-box'>
      <div className="container logn-container">
        <div className="row">
          <div className="col-md-5 logn-image-column">
            <img src={logoLAP} alt="Logo" />
          </div>
          <div className="col-md-6 logn-form-column">
            <div className="card card-body p-4">
              <div className="form-group">
                <input type="text" placeholder="olster" className="form-control" />
              </div>
              <div className="form-group">
                <input type="password" placeholder="*************" className="form-control" />
              </div>
              <button className='btn btn-success'>Login</button>
            </div>
          </div>
        </div>
      </div>
      <img className='bg-image' src="https://science-teaching.org/wp-content/uploads/2022/12/stem-banner-que-es-educacion-stem.jpg" alt="" />
    </div>
  )
}


export default Login;
