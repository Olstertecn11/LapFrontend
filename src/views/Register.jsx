import './styles/register.css';
import { useState } from 'react';
const Register = () => {



  const emptyForm = { email: '', password: '', confirmedPass: '', accessCode: '' };
  const [registerForm, setRegisterForm] = useState(emptyForm)



  const handleChange = (event) => {
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value
    });
  }


  const registerUser = () => {
    if (registerForm.password !== registerForm.confirmedPass || registerForm.email.length === 0 || registerForm.confirmedPass.length === 0 || registerForm.password === 0) {
      alert("No match"); return;
    }
    console.log(registerForm);
  }

  return (
    <div className="register-container">
      <img src="https://pbs.twimg.com/media/ESruSQ7XsAA36Cb?format=jpg&name=large" alt="" />
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="card p-4 register-card">
              <h6 className='text-white text-center'>Formulario de registro</h6>
              <div className="form-group mt-4">
                <input type="email" className='form-control' placeholder='Correo' name="email" onChange={handleChange} />
              </div>
              <div className="form-group mt-4">
                <input type="password" className='form-control' placeholder='Contraseña' name="password" onChange={handleChange} />
              </div>
              <div className="form-group mt-4">
                <input type="password" className='form-control' placeholder='Confirmar Contraseña' name="confirmedPass" onChange={handleChange} />
              </div>
              <div className="form-group mt-4">
                <input type="text" className='form-control' placeholder='Codigo de acceso' name="accessCode" onChange={handleChange} />
              </div>
              <button className='btn btn-white mt-2' onClick={registerUser}>Registrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Register;
