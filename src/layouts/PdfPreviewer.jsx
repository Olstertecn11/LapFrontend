
import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  Flex,
  Input,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

const PdfPreviewer = ({ pdf }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };

  const handleClick = () => {
    onOpen();
  };

  const addComment = () => {
    if (comment.trim() !== '') {
      setComments([...comments, comment]);
      setComment(''); // Limpiar el campo de comentario después de agregarlo
    }
  };

  return (
    <div>
      {pdf && (
        <iframe
          title="PDF Preview"
          src={`data:application/pdf;base64,${arrayBufferToBase64(pdf.contenido.data)}`}
          width="100%"
          height="480vh"
        />
      )}
      <button className="btn btn-primary mt-4" onClick={handleClick}>
        <i className="fas fa-comments"></i> Comentarios
      </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Comentarios</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {comments.length > 0 ? (
              comments.map((item, index) => <p key={index}>{item}</p>)
            ) : (
              <p>No hay comentarios</p>
            )}
          </ModalBody>
          <ModalFooter>
            <Flex width="100%" justify="space-between">
              <Input
                type="text"
                placeholder="Comentario..."
                className="form-control"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <Button colorScheme="blue" ml={2} onClick={addComment}>
                <i className="fas fa-paper-plane"></i>
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default PdfPreviewer;

