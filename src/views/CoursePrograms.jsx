
import ClassService from "../services/classes/ClassService";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StoreManagment from '../helpers/StorageManagement.js';
import { Text, useDisclosure } from "@chakra-ui/react";
import ControlBox from '../components/ControlsBox';
import Sidebar from '../components/Sidebar';
import NewClass from "../layouts/NewClass";
import { BeatLoader } from "react-spinners";

const CoursePrograms = ({ route = '/Clase/' }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useNavigate();
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);
  const { idUsr, role, username } = StoreManagment.getObject('session');
  const service = role === 1 ? ClassService.getAll : () => ClassService.getByTeacher(idUsr);
  const [loading, setLoading] = useState(true);

  const handleSearch = () => {
    const textToSearch = searchRef.current.value.toLowerCase();
    if (textToSearch.length == 0) fetchData()
    const filtered = originalData.filter(item =>
      Object.values(item).some(value =>
        typeof value === 'string' && value.toLowerCase().includes(textToSearch)
      )
    );
    setData(filtered)
  }



  const fetchData = async () => {
    if (!service) return;
    const response = await service();
    setOriginalData(response.data);
    setData(response.data);
    setLoading(false);
  };


  useEffect(() => {
    fetchData();
  }, []);


  const handleClick = (_id) => {
    history(`${route}${_id}`);
  }


  const btnRef = useRef(null);
  const searchRef = useRef(null);


  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          {loading && loading ? (
            <div classname="contenedor mx-auto mt-4">
              <beatloader color="#36d7b7" size={34} />
            </div>
          ) : ''}
          <div className="col-md-6">
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
                Hola {username}
              </Text>
              <Text as={'span'} color={'blue.400'} ml={'2'} fontSize={'2xl'} fontWeight={'bold'} >
                En esta seccion podrás ver todos tus cursos
              </Text>
            </div>
          </div>
          <div className="col-md-6">
            <div className="controls-container" style={{ marginLeft: '6vw' }}>
              <ControlBox refArr={[btnRef, null, searchRef]} handleArr={[onOpen, handleSearch]} data={originalData} updateData={fetchData} deleteData={ClassService.delete} showMore={true} />
            </div>
          </div>
        </div>
      </div>
      <div className="container p-2">


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
