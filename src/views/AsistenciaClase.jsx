import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Text, FormLabel, Switch } from "@chakra-ui/react";
import StudentService from '../services/student/StudentService';
import ClassService from "../services/classes/ClassService";
import StoreManagment from '../helpers/StorageManagement';
import DateHelper from "../helpers/DateHelper";
import Notify from '../components/Notify';
import './styles/AsistenciaClase.css';
import AsistenciaClaseItem from "../components/AsistenciaClaseItem";

const AsistenciaClase = () => {

  const { id } = useParams();
  const [students, setStudents] = useState([]);
  const [currentClass, setCurrentClass] = useState({});
  const [date, setDate] = useState(DateHelper.currentDate());
  const { username } = StoreManagment.getObject('session');


  const fetch = async () => {
    const student_response = await StudentService.getByClass(id);
    const class_response = await ClassService.getById(id);
    setStudents(student_response.data);
    setCurrentClass(class_response.data[0]);
  }

  useEffect(() => {
    fetch();
  }, []);


  const changeDate = (e) => {
    console.log(e.target.value);
    const date_selected = e.target.value;
    if (DateHelper.isInWeekend(date_selected)) {
      Notify('Fecha Inválida', 'La fecha que ha seleccionado no esta en las fechas hábiles de clases', 'error');
      return;
    }
    else {
      setDate(date_selected);
    }
  }


  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <div className="d-flex flex-column flex-nowrap align-items-start">
            <Text
              fontWeight={'bold'}
              as={'span'}
              color={'blue.900'}
              fontSize={'3xl'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.100',
                zIndex: -1,
              }}>
              {currentClass.degree}
            </Text>
            <Text as={'span'} color={'blue.400'} ml={'2'} fontSize={'2xl'} fontWeight={'bold'} >
              En esta seccion podrás ver todos los alumnos de este curso
            </Text>
          </div>
        </div>
        <div className="col-md-4">
          <FormLabel color='blue.900' fontWeight='bold' >Fecha</FormLabel>
          <input type="date" name="" className="form-control mt-2" value={date} onChange={changeDate} />
        </div>
      </div>
      <hr className="divide-line" />
      <div className="row mt-4">
        <table className="table table-striped asistence-table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Alumno</th>
              <th scope="col">Comentarios</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            {
              students.map((item, index) => (
                <AsistenciaClaseItem item={item} key={item + index} index={index} />
              ))
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}


export default AsistenciaClase;
