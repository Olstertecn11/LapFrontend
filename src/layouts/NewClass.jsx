import { useEffect, useState } from "react";
import DegreeService from "../services/degree/DegreeService";
import SubjectService from "../services/subject/SubjectService";
import ClassService from "../services/classes/ClassService";
import StoreManagment from '../helpers/StorageManagement';
import { Select, Button } from "@chakra-ui/react";
import Swal from 'sweetalert2'

const NewClass = ({ event, updateData }) => {


  const { idUsr } = StoreManagment.getObject('session');
  console.log(idUsr);
  const emptyClass = { degree: '', subject: '', teacher: idUsr }
  const [newClass, setNewClass] = useState(emptyClass);



  const [degrees, setDegrees] = useState([]);
  const [subjects, setSubjects] = useState([]);


  const fetchAllData = async () => {
    const degreesResponse = await DegreeService.getAll();
    const subjectsResponse = await SubjectService.getAll();
    setDegrees(degreesResponse);
    setSubjects(subjectsResponse);
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewClass({ ...newClass, [name]: value });
  };


  const saveData = async () => {
    event();
    console.log(newClass);
    const response = await ClassService.create(newClass);
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
    setNewClass(emptyClass);
  }



  useEffect(() => {
    fetchAllData();
  }, [])

  return (
    <div>
      <label htmlFor="">Grado</label>
      <Select name="degree" placeholder="Seleccione un grado" onChange={handleChange}>
        {degrees &&
          degrees.map((item, index) => (
            <option value={item.deg_id} key={index}>{item.deg_name}</option>
          ))
        }
      </Select>
      <br />
      <label htmlFor="">Asignatura</label>
      <Select name="subject" placeholder="Seleccione una asignatura" onChange={handleChange}>
        {subjects &&
          subjects.map((item, index) => (
            <option value={item.sbj_id} key={index}>{item.sbj_name}</option>
          ))
        }
      </Select>
      <Button colorScheme="green" mt={4} onClick={saveData}>Guardar</Button>
    </div>
  )

}

export default NewClass;
