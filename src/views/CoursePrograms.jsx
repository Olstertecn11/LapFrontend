
import ClassService from "../services/classes/ClassService";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StoreManagment from '../helpers/StorageManagement.js';
import { Text } from "@chakra-ui/react";

const CoursePrograms = () => {

  const history = useNavigate();
  const [data, setData] = useState([]);
  const { idUsr, role, username } = StoreManagment.getObject('session');

  const fetch = async () => {
    const response = role === 3 ? await ClassService.getAll() : await ClassService.getByTeacher(idUsr);
    console.log(response);
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
      <div className="row mb-0 mt-4 ml-2">

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
          Hola {username}
        </Text>

      </div>
      <div className="row mb-4 ml-0">
        <Text as={'span'} color={'blue.400'} ml={'2'} fontSize={'2xl'} fontWeight={'bold'} >
          En esta seccion podrás ver todos tus cursos
        </Text>
      </div>

      <div className="card-columns">
        {data && data.length != 0 ?
          (
            data.map((item, index) => (
              <div className="card gallery-card shadow p-3 mb-5 bg-white rounded" key={item.degree_name + index} onClick={() => handleClick(item.cls_id)}>
                <h5>{item.subject_name}</h5>
                <Text as={'span'} color={'green.400'} fontWeight={'bold'}>
                  {item.degree_name}
                </Text>
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
