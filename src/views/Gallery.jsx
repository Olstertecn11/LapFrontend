import './styles/Gallery.css';
import ActivityService from './../services/activities/ActivityService.js';
import { useNavigate } from 'react-router-dom';
import { useFetch } from './../hooks/useFetch';

const GalleryEvents = () => {

  const history = useNavigate();
  const { data, isPending, error } = useFetch(ActivityService.getAll);

  const redirectURL = (url) => {
    history(url);
  }

  return (
    <div>
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      <div className="row m-4">
        {data &&
          data.map((item, index) => (
            <div className="col-md-4" key={item.act_name + index}>
              <div className="card gallery-card" onClick={() => redirectURL(`/GaleriaImagenes/${item.act_id}`)} >
                <div className="card-body">
                  <h2>{item.act_name}</h2>
                </div>
              </div>
            </div>

          ))
        }
      </div>
    </div>

  )
}


export default GalleryEvents;
