import './styles/Gallery.css';
import ActivityService from './../services/activities/ActivityService.js';
import { useEffect, useState } from 'react';

const GalleryEvents = () => {

  const [activities, setActivities] = useState([])



  const fetchData = async () => {
    const response = await ActivityService.getAll();
    setActivities(response);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="row m-4">
        {
          activities.map(item => (
            <div className="col-md-4">
              <div className="card gallery-card" >
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
