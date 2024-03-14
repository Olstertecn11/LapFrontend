import { Button, Input, Textarea, Select } from "@chakra-ui/react";
import { useState } from "react";
import ActivityService from "../services/activities/ActivityService";
import UserService from '../services/user/UserService';
import Swal from 'sweetalert2'

const NewUser = ({ event, updateData }) => {
  const emptyUser = {
    name: '',
    surname: '',
    username: '',
    password: '',
    email: '',
    phone: '',
    dpi: '',
    privileges: 0
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
    console.log(user);
    event();
    const response = await UserService.create(user);
    console.log(response);
    if (response.status) {
      Swal.fire({
        title: "Operacion Exitosa",
        text: "Evento creado correctamente",
        icon: "success"
      });
      updateData();
    }
    else {
      Swal.fire({
        title: "Operacion Denegada",
        text: "Error al crear el evento",
        icon: "error"
      });
    }
    setUser(emptyUser);
  }




  return (
    <div>
      <label htmlFor="actDate" className="mt-4 text-secondary">Name</label>
      <input
        className="form-control"
        type="text"
        id="name"
        name="name"
        placeholder="Oscar"
        value={user.name}
        onChange={handleChange}
      />
      <label htmlFor="actName" className="text-secondary mt-4">Apellido</label>
      <Input
        type="text"
        id="surname"
        name="surname"
        placeholder="López"
        value={user.surname}
        onChange={handleChange}
      />
      <label htmlFor="actDescription" className="text-secondary mt-4">Nombre de Usuario</label>
      <Input
        type="text"
        id="username"
        name="username"
        placeholder="ols@11"
        value={user.username}
        onChange={handleChange}
      />
      <label htmlFor="actDescription" className="text-secondary mt-4">Contraseña</label>
      <Input
        type="password"
        id="password"
        name="password"
        placeholder="********"
        value={user.password}
        onChange={handleChange}
      />
      <label htmlFor="actDescription" className="text-secondary mt-4">Email</label>
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="oliverdav@gmail.com"
        value={user.email}
        onChange={handleChange}
      />
      <label htmlFor="actDescription" className="text-secondary mt-4">Telefono</label>
      <Input
        type="text"
        id="phone"
        name="phone"
        placeholder="59621085"
        value={user.phone}
        onChange={handleChange}
      />
      <label htmlFor="actDescription" className="text-secondary mt-4">DPI</label>
      <Input
        type="text"
        id="dpi"
        name="dpi"
        placeholder="4985430985"
        value={user.dpi}
        onChange={handleChange}
      />
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
