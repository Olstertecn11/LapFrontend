
import ClassService from "../services/classes/ClassService";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StoreManagment from '../helpers/StorageManagement.js';

const CoursePrograms = () => {

  const history = useNavigate();
  const [data, setData] = useState([]);
  const { idUsr, role } = StoreManagment.getObject('session');

  const fetch = async () => {
    const response = role === 1 ? await ClassService.getAll() : await ClassService.getByTeacher(idUsr);
    setData(response.data);
  }

  useEffect(() => {
    console.log('role');
    console.log(role);
    fetch();
  }, [])

  const handleClick = (_id) => {
    history(`/Clase/${_id}`);
  }


  return (
    <div className="container p-4">
      <div className="card-columns">

        {data && data.length != 0 ?
          (
            data.map((item, index) => (
              <div className="card gallery-card shadow p-3 mb-5 bg-white rounded" key={item.degree_name + index} onClick={() => handleClick(item.cls_id)}>
                <h5>{item.degree_name}</h5>
              </div>
            )))
          :
          <h2>Este profesor no tiene cursos</h2>

        }
      </div>
    </div>
  )
}



export default CoursePrograms;
