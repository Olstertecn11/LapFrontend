import { Button, Input, InputGroup, InputRightElement, Select } from "@chakra-ui/react";
import { useState } from "react";
import UserService from '../services/user/UserService';
import Notify from "../components/Notify";
import { BiShow, BiHide } from "react-icons/bi";

const NewUser = ({ event, updateData }) => {
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)

  const emptyUser = {
    password: '',
    email: '',
    privileges: 0,
    password2: ''
  }

  const [user, setUser] = useState(emptyUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevActivity => ({
      ...prevActivity,
      [name]: value
    }));
  }

  const saveData = async () => {
    if (user.password !== user.password2) {
      Notify("Operacion Denegeada", "La contraeña no coincide");
      return;
    }
    event();
    const response = await UserService.create(user);
    console.log(response);
    setUser(emptyUser);
    if (response.status) {
      Notify("Operacion Exitosa", "Evento creado correctamente", "success");
      updateData();
      return;
    }
    Notify("Operacion Denegada", "Error al crear el evento", "error");
  }




  return (
    <div>
      <label htmlFor="actDescription" className="text-secondary mt-4">Email</label>
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="oliverdav@gmail.com"
        value={user.email}
        onChange={handleChange}
      />

      <label htmlFor="actDescription" className="text-secondary mt-4">Contraseña</label>
      <InputGroup size='md'>
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          id="password"
          name="password"
          placeholder='***********'
          onChange={handleChange}
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={() => setShow(!show)}>
            {show ? <BiShow /> : <BiHide />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <label htmlFor="actDescription" className="text-secondary mt-4">Verificacion de Contraseña</label>
      <InputGroup size='md'>
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          id="password2"
          name="password2"
          placeholder='***********'
          onChange={handleChange}
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={() => setShow2(!show2)}>
            {show2 ? <BiShow /> : <BiHide />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <label htmlFor="actDescription" className="text-secondary mt-4">Rol</label>
      <Select placeholder="Seleccione una opcion" onChange={handleChange} name='privileges' >
        <option value="1">Administrador</option>
        <option value="2">Maestro</option>
      </Select>
      <Button colorScheme="green" mt={4} onClick={saveData}>Guardar</Button>
    </div>
  );
}


export default NewUser;
