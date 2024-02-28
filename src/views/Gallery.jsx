import './styles/Gallery.css';
import ActivityService from './../services/activities/ActivityService.js';
import { useNavigate } from 'react-router-dom';
import { useFetch } from './../hooks/useFetch';
import { Button } from '@chakra-ui/react';

const GalleryEvents = () => {

  const history = useNavigate();
  const { data, isPending, error } = useFetch(ActivityService.getAll);

  const redirectURL = (url) => {
    history(url);
  }

  return (
    <div style={{ background: '#b6d0d6', height: '100%' }}>
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      <div className="row">
        <div className="col-md-4 mr-auto ml-4 mt-4">
          <div className="card shadow p-3 mb-5 rounded" style={{ height: '10vh', width: '15vw', background: '#4e6e8a24 ' }}>
            <div className="row">
              <Button colorScheme={'green'} className='w-15 mr-auto ml-4 mt-2' > <i className='fa-solid fa-plus'></i></Button>
              <Button colorScheme={'red'} className='w-15 mr-auto ml-4 mt-2' > <i className='fa-solid fa-trash'></i></Button>
              <Button colorScheme={'blue'} className='w-15 mr-auto ml-4 mt-2' > <i className='fa-solid fa-magnifying-glass'></i></Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-4">
        <div className="row">
          {data &&
            data.map((item, index) => (
              <div className="col-md-5 mx-auto " key={item.act_name + index}>
                <div className="card gallery-card shadow p-3 mb-5 bg-white rounded" onClick={() => redirectURL(`/GaleriaImagenes/${item.act_id}`)} >
                  <div className="card-body">
                    <h2 style={{ color: '#76a0aa', fontWeight: 'bold' }} >{item.act_name}</h2>
                  </div>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>

  )
}


export default GalleryEvents;
