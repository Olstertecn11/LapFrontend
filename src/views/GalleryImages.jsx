import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import ActivityService from "../services/activities/ActivityService";
import Sidebar from '../components/Sidebar';
import { useDisclosure } from '@chakra-ui/react';
import uploadImage from "../layouts/uploadImage";
import ControlBox from '../components/ControlsBox';



const GalleryImages = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const fetchData = async () => {
    const response = await ActivityService.getImagesFromActivity(id);
    setData(response);
  }

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <div>
      <ControlBox refArr={[btnRef]} handleArr={[onOpen]} />
      <div className="row m-4">
        {
          data.map((item) => (
            <div className="col-md-2" key={item.img_id + item.img_id_act}>
              <div className="card">
                <img src={item.img_src} width={200} className='mx-auto' />
              </div>
            </div>
          ))
        }

      </div>
      <Sidebar updateData={fetchData} Component={uploadImage} onOpen={onClose} onClose={onClose} isOpen={isOpen} title={'Subir Imagen'} btnRef={btnRef} />
    </div>
  )
}

export default GalleryImages;
