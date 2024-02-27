import './styles/Gallery.css';
import ActivityService from './../services/activities/ActivityService.js';
import { useEffect, useState } from 'react';
import { useFetch } from './../hooks/useFetch';

const GalleryEvents = () => {

  const { data, isPending, error } = useFetch(ActivityService.getAll);

  return (
    <div>
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      <div className="row m-4">
        {data &&
          data.map(item => (
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
