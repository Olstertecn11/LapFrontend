import {
  Drawer,
  Input,
  Icon,
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack
} from '@chakra-ui/react'
import { FcRedo } from 'react-icons/fc';

import { useNavigate } from 'react-router-dom';
import GridCardList from '../components/GridCardList';

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
            <GridCardList callback={onClose} />

          </DrawerBody>

          <DrawerFooter>
            <Stack>
              <small className='text-muted'> <em>Educando para la eternidad</em> </small>
              <button className='btn btn-danger w-25 ml-auto' ><i className="fa-solid fa-power-off"></i></button>
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}


export default SideDrawer;
