
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
                <div key={index}>
                  <strong style={{ color: username === item.usr_name ? 'red' : 'black' }}>{item.usr_name}:</strong> {item.content}
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

