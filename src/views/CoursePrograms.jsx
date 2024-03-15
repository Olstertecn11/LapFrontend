
import ClassService from "../services/classes/ClassService";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StoreManagment from '../helpers/StorageManagement.js';
import { Text, useDisclosure } from "@chakra-ui/react";
import ControlBox from '../components/ControlsBox';
import Sidebar from '../components/Sidebar';
import NewClass from "../layouts/NewClass";

const CoursePrograms = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useNavigate();
  const [data, setData] = useState([]);
  const [service, setService] = useState(null);
  const { idUsr, role, username } = StoreManagment.getObject('session');




  useEffect(() => {
    const getService = () => {
      if (role === 1) {
        return ClassService.getAll;
      } else {
        return () => ClassService.getByTeacher(idUsr);
      }
    };

    const service = getService();
    setService(service);

    const fetchData = async () => {
      if (!service) return;
      const response = await service();
      console.log(response);
      setData(response.data);
    };

    fetchData();
  }, [idUsr, role]);


  const handleClick = (_id) => {
    history(`/Clase/${_id}`);
  }


  const btnRef = useRef(null);


  return (
    <div>
      <div className="controls-container" style={{ marginLeft: '6vw' }}>
        <ControlBox refArr={[btnRef]} handleArr={[onOpen]} />
      </div>
      <div className="container p-2">
        <div className="row mb-0 mt-0 ml-2">
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
                  <div className="row pl-3 pr-3">
                    <Text as={'span'} color={'green.400'} fontWeight={'bold'}>
                      {item.degree_name}
                    </Text>
                    <Text color={'gray.500'} className='ml-auto mr-2' >
                      Prof. {item.teacher_name}
                    </Text>
                  </div>
                </div>
              )))
            :
            <h2>Este profesor no tiene cursos</h2>

          }
        </div>
        {
          service && service !== null ?
            (
              <Sidebar updateData={() => setTimeout(() => window.location.reload(), 1000)} Component={NewClass} onOpen={onClose} onClose={onClose} isOpen={isOpen} title={'Nueva Clase'} btnRef={btnRef} />
            ) :
            ''
        }
      </div>
    </div>
  )
}



export default CoursePrograms;
