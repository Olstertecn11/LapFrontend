import SideDrawer from "./SideDrawer";
import { useRef } from "react";
import { useDisclosure } from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()




  return (
    < div >
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand d-flex align-items-center" href="#" style={{ color: '#db963e' }}> <img width={30} className='mr-2' style={{ marginTop: '-4px' }} src="https://lh3.googleusercontent.com/proxy/nzF5mPZ1DQY7Bdg5TJ9AKZBS2MCiHlmSnkmQllSWagvMtuEhjR2I3_1ZZGrGmwP5SqStTQBVnpgcc9ZgyKtDsOt3wftlKkV7r82DlbSIpH9XgAWonh1cJBUknCg3-_cu1dVkNRqMmt--zuEi5jRm-Lv-5_sdqQ" alt="" /> <b>Liceo Adventista El Progreso</b></a>
        <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
          <form className="form-inline  my-2 my-lg-0 ml-auto">
            <button className="btn  my-2 my-sm-0" style={{ color: 'gray' }} type="button"><i className="fa-solid fa-gear"></i> </button>
            <button ref={btnRef} onClick={onOpen} className="btn text-dark ml-2 my-2 my-sm-0" type="button"><i className="fa-solid fa-bars"></i> </button>
          </form>
        </div>
      </nav>
      <SideDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} btnRef={btnRef} />
    </div >
  )
}


export default Navbar;
