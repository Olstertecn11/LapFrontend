import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ActivityService from "../services/activities/ActivityService";



const GalleryImages = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await ActivityService.getImagesFromActivity(id);
    setData(response);
  }

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <div>
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

    </div>
  )
}

export default GalleryImages;
