import './styles/register.css';
const Register = () => {
  return (
    <div class="register-container">
      <img src="https://pbs.twimg.com/media/ESruSQ7XsAA36Cb?format=jpg&name=large" alt="" />
      <div class="container">
        <div class="row">
          <div class="col-md-4 mx-auto">
            <div class="card p-4 register-card">
              <h6 className='text-white text-center'>Formulario de registro</h6>
              <div class="form-group mt-4">
                <input type="text" class='form-control' placeholder='Correo' id="" />
              </div>
              <div class="form-group mt-4">
                <input type="text" class='form-control' placeholder='Nombre' id="" />
              </div>
              <button className='btn btn-white'>Registrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Register;
