import './styles/Gallery.css';
import ActivityService from './../services/activities/ActivityService.js';
import { useNavigate } from 'react-router-dom';
import useFetch from './../hooks/useFetch';
import ControlBox from "../components/ControlsBox";
import Sidebar from '../components/Sidebar';
import { useDisclosure } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import NewEvent from '../layouts/NewEvent';

const GalleryEvents = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const history = useNavigate();
  const { data, isPending, error, updateData } = useFetch(ActivityService.getAll, []);

  const redirectURL = (url) => {
    history(url);
  }

  return (
    <div style={{ background: '#b6d0d6', height: '100%' }}>
      <ControlBox refArr={[btnRef]} handleArr={[onOpen]} />
      <div className="container pt-4">
        <div className="card-columns">
          {data &&
            data.map((item, index) => (
              <div key={item + index} className="card gallery-card shadow p-3 mb-5 bg-white rounded" onClick={() => redirectURL(`/GaleriaImagenes/${item.act_id}`)} >
                <div className="card-body">
                  <h2 style={{ color: '#76a0aa', fontWeight: 'bold' }} >{item.act_name}</h2>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <Sidebar updateData={updateData} Component={NewEvent} onOpen={onClose} onClose={onClose} isOpen={isOpen} title={'Nuevo Evento'} btnRef={btnRef} />
    </div>

  )
}


export default GalleryEvents;
