import './styles/Gallery.css';
import ActivityService from './../services/activities/ActivityService.js';
import { useNavigate } from 'react-router-dom';
import useFetch from './../hooks/useFetch';
import ControlBox from "../components/ControlsBox";
import Sidebar from '../components/Sidebar';
import { useDisclosure } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import NewEvent from '../layouts/NewEvent';

const GalleryEvents = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const searchRef = useRef(null);
  const history = useNavigate();
  const { data, isPending, error, updateData } = useFetch(ActivityService.getAll, []);
  const [mydata, setMyData] = useState(data);

  useEffect(() => {
    setMyData(data);
  }, [data]);

  const redirectURL = (url) => {
    history(url);
  }


  const handleSearch = () => {
    const textToSearch = searchRef.current.value.toLowerCase();
    if (textToSearch.length == 0) updateData()
    const filtered = data.filter(item =>
      Object.values(item).some(value =>
        typeof value === 'string' && value.toLowerCase().includes(textToSearch)
      )
    );
    setMyData(filtered);
  }

  return (
    <div style={{ background: '#b6d0d6', height: '100%' }}>
      <div className="container pt-4 ml-4">
        <ControlBox refArr={[btnRef, null, searchRef]} handleArr={[onOpen, handleSearch]} data={data} updateData={updateData} deleteData={ActivityService.deleteActivity} />
      </div>
      <div className="container pt-4">
        <div className="row">
          <div className="card-columns">
            {mydata &&
              mydata.map((item, index) => (
                <div key={item + index} className="card gallery-card shadow p-1 mb-5 bg-white rounded" onClick={() => redirectURL(`/GaleriaImagenes/${item.act_id}`)} >
                  <div className="card-body">
                    <h5 style={{ color: '#76a0aa', fontWeight: 'bold' }} >{item.act_name}</h5>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <Sidebar updateData={updateData} Component={NewEvent} onOpen={onClose} onClose={onClose} isOpen={isOpen} title={'Nuevo Evento'} btnRef={btnRef} />
    </div>

  )
}


export default GalleryEvents;
