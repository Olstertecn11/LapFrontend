import ProgressBar from "@ramonak/react-progress-bar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const WelcomePage = () => {

  const history = useNavigate();


  useEffect(() => {
    setTimeout(() => {
      history('/Dashboard');
    }, 6000);
  }, []);


  return (
    <div className="welcome-container mt-4">
      <div className="container mt-2">
        <div className="row">
          <img src="http://localhost:5173/src/assets/logoLAP.png" className="mx-auto" width={350} />
        </div>
        <div className="row">
          <div className="col-md-10 mx-auto">
            <ProgressBar isLabelVisible={false} height='12px' completed={100} animateOnRender transitionDuration="5s" width="100%" className="mt-4 ml-4" bgColor="#2A71A8" baseBgColor="#5c5c538f" />
          </div>
        </div>
      </div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg" className="bg-image" />
    </div>
  )
}


export default WelcomePage;
