
import ClassService from "../services/classes/ClassService";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CoursePrograms = () => {

  const history = useNavigate();
  const [data, setData] = useState([]);


  const fetch = async () => {
    const response = await ClassService.getByTeacher(2);
    console.log(response);
    setData(response.data);
  }

  useEffect(() => {
    fetch();
  }, [])

  const handleClick = (_id) => {
    history(`/Clase/${_id}`);
  }


  return (
    <div className="container p-4">
      <div className="card-columns">

        {data &&
          data.map((item, index) => (
            <div className="card gallery-card shadow p-3 mb-5 bg-white rounded" key={item.degree_name + index} onClick={() => handleClick(item.cls_id)}>
              <h5>{item.degree_name}</h5>
            </div>
          ))
        }
      </div>
    </div>
  )
}



export default CoursePrograms;
