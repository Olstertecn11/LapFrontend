import { Button, Input, Textarea, Select } from "@chakra-ui/react";
import { useState } from "react";
import ActivityService from "../services/activities/ActivityService";
import DegreeService from "../services/degree/DegreeService";
import Swal from 'sweetalert2'

const NewDegree = ({ event, updateData }) => {
  const emptyDegree = {
    name: ''
  }

  const [degree, setUser] = useState(emptyDegree);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevActivity => ({
      ...prevActivity,
      [name]: value
    }));
  }

  const saveData = async () => {
    console.log(degree);
    event();
    const response = await DegreeService.create(degree);
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
    setUser(emptyDegree);
  }




  return (
    <div>
      <label htmlFor="actDate" className="mt-4 text-secondary">Nombre del Grado</label>
      <input
        className="form-control"
        type="text"
        id="name"
        name="name"
        placeholder="Literatura"
        value={degree.name}
        onChange={handleChange}
      />
      <Button colorScheme="green" mt={4} onClick={saveData}>Guardar</Button>
    </div>
  );
}


export default NewDegree;
