import './styles/register.css';
import { useState } from 'react';
import RegisterService from '../services/register/RegisterService';
import { Link } from 'react-router-dom';
import Notify from '../components/Notify';
const Register = () => {



  const emptyForm = { email: '', password: '', confirmedPass: '', accessCode: '' };
  const [registerForm, setRegisterForm] = useState(emptyForm)



  const handleChange = (event) => {
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value
    });
  }


  const registerUser = async () => {
    if (registerForm.password !== registerForm.confirmedPass || registerForm.email.length === 0 || registerForm.confirmedPass.length === 0 || registerForm.password === 0) {
      alert("No match"); return;
    }
    const response = await RegisterService.register(registerForm);
    console.log(response);
    if (response.status) {
      Notify('Éxito', 'Cuenta creada correctamente', 'success');
      setRegisterForm(emptyForm);
    }
    else {
      Notify('Error', 'Error al crear la cuenta', 'error');
      setRegisterForm(emptyForm);
    }
    setRegisterForm(emptyForm);
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
                <input type="email" className='form-control' placeholder='Correo' name="email" onChange={handleChange} value={registerForm.email} />
              </div>
              <div className="form-group mt-4">
                <input type="password" className='form-control' placeholder='Contraseña' name="password" onChange={handleChange} value={registerForm.password} />
              </div>
              <div className="form-group mt-4">
                <input type="password" className='form-control' placeholder='Confirmar Contraseña' name="confirmedPass" onChange={handleChange} value={registerForm.confirmedPass} />
              </div>
              <div className="form-group mt-4">
                <input type="text" className='form-control' placeholder='Codigo de acceso' name="accessCode" onChange={handleChange} value={registerForm.accessCode} />
              </div>
              <button className='btn btn-white mt-2' onClick={registerUser}>Registrar</button>
              <Link className='btn-back-login' to='/'>Volver al login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Register;
