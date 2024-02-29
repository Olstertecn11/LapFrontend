import { Button, Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import ActivityService from "../services/activities/ActivityService";
import Swal from 'sweetalert2'

const NewEvent = ({ event, updateData }) => {
  const emptyAct = {
    name: '',
    description: '',
    date: ''
  }

  const [activity, setActivity] = useState(emptyAct);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setActivity(prevActivity => ({
      ...prevActivity,
      [name]: value
    }));
  }

  const saveData = async () => {
    event();
    const response = await ActivityService.createActivity(activity);
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
    setActivity(emptyAct);
  }




  return (
    <div>
      <label htmlFor="actDate" className="mt-4 text-secondary">Fecha</label>
      <input
        className="form-control"
        type="date"
        id="date"
        name="date"
        value={activity.date}
        onChange={handleChange}
      />
      <label htmlFor="actName" className="text-secondary mt-4">Nombre</label>
      <Input
        type="text"
        id="name"
        name="name"
        placeholder="Dia de la madre"
        value={activity.name}
        onChange={handleChange}
      />
      <label htmlFor="actDescription" className="text-secondary mt-4">Descripcion</label>
      <Textarea
        id="actDescription"
        name="description"
        placeholder="Evento del dia de las madres"
        value={activity.description}
        onChange={handleChange}
      />
      <Button colorScheme="green" mt={4} onClick={saveData}>Guardar</Button>
    </div>
  );
}


export default NewEvent;
