import SideDrawer from "./SideDrawer";
import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Image, useDisclosure } from "@chakra-ui/react";
import iasd_icon from './../assets/blueLogoIASD.png';
import StoreManagment from '../helpers/StorageManagement';
import { useEffect } from "react";


const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const emptyIMG = 'https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png';
  const [profileImage, setProfileImage] = useState(emptyIMG);
  const btnRef = useRef()
  const history = useNavigate();


  useEffect(() => {
    try {
      const { img } = StoreManagment.getObject('session');
      if (img) setProfileImage(img);
    } catch (error) {
      console.log('errorrrr');
    }
  }, []);





  return (
    < div >
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to='/Dashboard' className="navbar-brand d-flex align-items-center" href="#" style={{ color: '#408594' }}> <img width={30} className='mr-2' style={{ marginTop: '-4px' }} src={iasd_icon} alt="" /> <b>Liceo Adventista El Progreso</b></Link>

        <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
          <form className="form-inline  my-2 my-lg-0 ml-auto">
            <Link to='/Perfil' className="btn  my-2 my-sm-0" style={{ color: 'gray' }} type="button"><i className="fa-solid fa-gear"></i> </Link>
            <button ref={btnRef} onClick={onOpen} style={{ color: 'gray' }} className="btn  ml-2 my-2 my-sm-0" type="button">
              < Image
                borderRadius='full'
                boxSize='40px'
                objectFit='cover'
                src={profileImage}
                alt='Dan Abramov'
              />
            </button>
          </form>
        </div>
      </nav>
      <SideDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} btnRef={btnRef} />
    </div >
  )
}


export default Navbar;
