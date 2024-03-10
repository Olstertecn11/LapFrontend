import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button
} from '@chakra-ui/react'

const Sidebar = ({ Component, title, isOpen, onOpen, onClose, btnRef, updateData }) => {

  return (
    <div>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{title}</DrawerHeader>

          <DrawerBody>
            {
              Component && (
                <Component updateData={updateData} event={onClose} />
              )
            }
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' colorScheme={'red'} mr={0} onClick={onClose}>
              Cancelar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default Sidebar;
