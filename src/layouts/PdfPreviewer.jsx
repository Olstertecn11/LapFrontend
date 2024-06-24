
import React, { useEffect, useState } from 'react';
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
import CommentsService from '../services/comments/CommentsService';
import StoreManagment from '../helpers/StorageManagement.js';



const PdfPreviewer = ({ pdf, _class, user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const { username } = StoreManagment.getObject('session');
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


  const handleKey = (e) => {
    if (e.key === 'Enter') {
      addComment();
    }

  }

  const addComment = async () => {
    if (comment.trim() !== '') {
      const response = await CommentsService.create(comment, pdf.id, user, _class);
      console.log(response);
      fetchComments(); // Refetch comments after adding a new one
      setComment('');
    } else {
      alert("Mensaje vacío");
    }
  };

  const fetchComments = async () => {
    const response = await CommentsService.getByClassAndPdf(_class, pdf.id);
    setComments(response.data);
    console.log(response);
  };

  useEffect(() => {
    fetchComments();
  }, []);

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
              comments.map((item, index) => (
                <div key={index} class="d-flex flex-column mt-4">
                  <div className="message-info">
                    <strong style={{ color: username === item.usr_name ? 'blue' : 'black' }}>{item.usr_name}</strong>
                    <small className="ml-2">{new Date(item.fecha).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })}</small>
                  </div>
                  <div className="message">
                    {item.content}
                  </div>
                </div>
              ))
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
                onKeyDown={handleKey}
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

