
import './styles/register.css'; // Mantiene los estilos CSS que mencionaste
import { useState } from 'react';
import RegisterService from '../services/register/RegisterService';
import EmailHelper from '../helpers/EmailHelper';
import { Link } from 'react-router-dom';
import Notify from '../components/Notify';
import { Input, InputGroup, InputRightElement, Box, Button } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const Register = () => {

  const emptyForm = { email: '', password: '', confirmedPass: '', accessCode: '' };
  const [registerForm, setRegisterForm] = useState(emptyForm);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (event) => {
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value
    });
  };

  const handlePasswordVisibility = () => setShowPassword(!showPassword);
  const handleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const registerUser = async () => {
    if (registerForm.password.length > 8 || registerForm.confirmedPass.length > 8) {
      Notify('Error', 'La contraseña debe ser como máximo de 8 caracteres', 'error');
      return;
    }

    if (registerForm.password !== registerForm.confirmedPass || registerForm.email.length === 0 || registerForm.confirmedPass.length === 0 || registerForm.password === 0) {
      Notify('Error', 'Debe llenar todos los campos para poder registrarse', 'error');
      return;
    }
    const response = await RegisterService.register(registerForm);
    console.log(response);
    if (response.status) {
      EmailHelper.confirmAccount(response.data.email, response.data.username, response.data.password);
      Notify('Éxito', 'Cuenta creada correctamente', 'success');
      setRegisterForm(emptyForm);
    }
    else {
      Notify('Error', 'Error al crear la cuenta', 'error');
      setRegisterForm(emptyForm);
    }
    setRegisterForm(emptyForm);
  };

  return (
    <div className="register-container">
      <img src="https://pbs.twimg.com/media/ESruSQ7XsAA36Cb?format=jpg&name=large" alt="" />
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="card p-4 register-card">
              <h6 className='text-white text-center font-weight-bold'>Formulario de registro</h6>
              <Box className="form-group mt-4">
                <Input
                  type="email"
                  placeholder='Correo'
                  name="email"
                  onChange={handleChange}
                  value={registerForm.email}
                  background="transparent"
                  border="none"
                  borderBottom="1px solid #ccc"
                  color="#afafaf"
                  _placeholder={{ color: '#afafaf' }}
                  _focus={{ boxShadow: 'none', borderColor: '#ccc' }}
                />
              </Box>
              <Box className="form-group mt-4">
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Contraseña'
                    name="password"
                    onChange={handleChange}
                    value={registerForm.password}
                    background="transparent"
                    border="none"
                    borderBottom="1px solid #ccc"
                    color="#afafaf"
                    _placeholder={{ color: '#afafaf' }}
                    _focus={{ boxShadow: 'none', borderColor: '#ccc' }}
                  />
                  <InputRightElement>
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={handlePasswordVisibility}
                      background="transparent"
                      _hover={{ background: "transparent" }}
                    >
                      {showPassword ? <ViewOffIcon color="#afafaf" /> : <ViewIcon color="#afafaf" />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Box>
              <Box className="form-group mt-4">
                <InputGroup>
                  <Input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder='Confirmar Contraseña'
                    name="confirmedPass"
                    onChange={handleChange}
                    value={registerForm.confirmedPass}
                    background="transparent"
                    border="none"
                    borderBottom="1px solid #ccc"
                    color="#afafaf"
                    _placeholder={{ color: '#afafaf' }}
                    _focus={{ boxShadow: 'none', borderColor: '#ccc' }}
                  />
                  <InputRightElement>
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={handleConfirmPasswordVisibility}
                      background="transparent"
                      _hover={{ background: "transparent" }}
                    >
                      {showConfirmPassword ? <ViewOffIcon color="#afafaf" /> : <ViewIcon color="#afafaf" />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Box>
              <Box className="form-group mt-4">
                <Input
                  type="text"
                  placeholder='Codigo de acceso'
                  name="accessCode"
                  onChange={handleChange}
                  value={registerForm.accessCode}
                  background="transparent"
                  border="none"
                  borderBottom="1px solid #ccc"
                  color="#afafaf"
                  _placeholder={{ color: '#afafaf' }}
                  _focus={{ boxShadow: 'none', borderColor: '#ccc' }}
                />
              </Box>
              <Button
                className="btn-white"
                mt="2"
                onClick={registerUser}
              >
                Registrar
              </Button>
              <Link className='btn-back-login' to='/'>
                Volver al login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

