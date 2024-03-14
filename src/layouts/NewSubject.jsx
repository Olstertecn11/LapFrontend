import { Button, Input, Textarea, Select } from "@chakra-ui/react";
import { useState } from "react";
import ActivityService from "../services/activities/ActivityService";
import SubjectService from '../services/subject/SubjectService';
import Swal from 'sweetalert2'

const NewSubject = ({ event, updateData }) => {
  const emptySubject = {
    name: ''
  }

  const [subject, setUser] = useState(emptySubject);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevActivity => ({
      ...prevActivity,
      [name]: value
    }));
  }

  const saveData = async () => {
    console.log(subject);
    event();
    const response = await SubjectService.create(subject);
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
    setUser(emptySubject);
  }




  return (
    <div>
      <label htmlFor="actDate" className="mt-4 text-secondary">Nombre de la asignatura</label>
      <input
        className="form-control"
        type="text"
        id="name"
        name="name"
        placeholder="Literatura"
        value={subject.name}
        onChange={handleChange}
      />
      <Button colorScheme="green" mt={4} onClick={saveData}>Guardar</Button>
    </div>
  );
}


export default NewSubject;
