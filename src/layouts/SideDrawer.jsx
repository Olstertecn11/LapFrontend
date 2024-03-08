import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack
} from '@chakra-ui/react'

import { useNavigate } from 'react-router-dom';
import GridCardList from '../components/GridCardList';
import AuthService from '../services/auth/AuthService';

const SideDrawer = ({ isOpen, onOpen, onClose, btnRef }) => {

  const history = useNavigate();


  const redirectURL = (_url) => {
    history(_url);
    onClose();
  }

  const handleClose = async () => {
    const userSession = JSON.parse(localStorage.getItem('session'));
    const idUser = userSession.idUsr;
    const response = await AuthService.logout(idUser);
    localStorage.removeItem('session');
    localStorage.clear();
    history('/');
  }


  return (
    <>
      <Drawer
        isOpen={isOpen}
        size={'full'}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent background={'#dae9f7'}>
          <DrawerCloseButton />
          <DrawerHeader>MENU</DrawerHeader>

          <DrawerBody >
            <GridCardList callback={onClose} />
          </DrawerBody>
          <DrawerFooter>
            <Stack>
              <small style={{ color: '#374e67' }}> <em>Educando para la eternidad</em> </small>
              <button className='btn btn-danger w-25 ml-auto' onClick={handleClose} ><i className="fa-solid fa-power-off"></i></button>
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}


export default SideDrawer;
