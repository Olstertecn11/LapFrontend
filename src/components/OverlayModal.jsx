import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text
} from '@chakra-ui/react'
import { useState } from 'react'

const OverlayModal = ({ isOpen, onOpen, onClose, Component, title = "Previsualizacion de Documento", type = 1, size = '6xl' }) => {
  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )

  const OverlayTwo = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  )

  const [overlay, setOverlay] = useState(type === 1 ? <OverlayOne /> : <OverlayTwo />);

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size={size} >
        {overlay}
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {Component &&
              <Component />
            }
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default OverlayModal;
