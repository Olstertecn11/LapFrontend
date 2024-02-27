import {
  Drawer,
  Input,
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

import { useNavigate } from 'react-router-dom';

const SideDrawer = ({ isOpen, onOpen, onClose, btnRef }) => {


  const history = useNavigate();


  const redirectURL = (_url) => {
    history(_url);
    onClose();
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
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>MENU</DrawerHeader>

          <DrawerBody>
            <Button variant='outline' mr={3} width={'100%'} onClick={() => redirectURL('/Dashboard')}>
              <i className='fa-solid fa-home mr-2'></i>
              Inicio
            </Button>
            <Button variant='outline' mr={3} width={'100%'} mt={4} onClick={onClose}>
              <i className='fa-solid fa-graduation-cap mr-2'></i>
              Plan de estudios
            </Button>
            <Button variant='outline' mr={3} width={'100%'} mt={4} onClick={onClose}>
              <i className='fa-solid fa-calendar mr-2'></i>
              Eventos
            </Button>
            <Button variant='outline' mr={3} width={'100%'} mt={4} onClick={onClose}>
              <i className='fa-solid fa-pen-to-square mr-2'></i>
              Asistencia
            </Button>
            <Button variant='outline' mr={3} width={'100%'} mt={4} onClick={() => redirectURL('/')}>
              <i className='fa-solid fa-pen-to-square mr-2'></i>
              Cerrar Sesion
            </Button>
          </DrawerBody>

          <DrawerFooter>
            <small className='text-muted'> <em>Educando para la eternidad</em> </small>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}


export default SideDrawer;
