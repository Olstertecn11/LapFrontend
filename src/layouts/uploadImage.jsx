
import React, { useState } from 'react';
import { Box, Button, Text, Image } from '@chakra-ui/react';
import ActivityService from '../services/activities/ActivityService';
import { useParams } from 'react-router-dom';

function UploadImage({ event, updateData }) {
  const [dragging, setDragging] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  let { id } = useParams();

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    if (imagePreview) {
      const response = await ActivityService.saveImage({ idActivity: id, img: imagePreview })
      if (event) event();
      if (updateData) updateData();
    } else {
      console.log('No hay imagen para guardar.');
    }
  };


  return (
    <div>
      <p>Arrastre la imagen aquí</p>
      <Box
        p="4"
        mt="4"
        borderWidth="2px"
        borderStyle="dashed"
        borderRadius="md"
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        bg={dragging ? 'gray.200' : 'white'}
        textAlign="center"
        cursor="pointer"
      >
        {imagePreview ? (
          <Image src={imagePreview} maxH="200px" maxW="200px" mx="auto" my="4" />
        ) : (
          <Text fontSize="lg">Drag and drop your image here</Text>
        )}
      </Box>
      <Button mt={4} variant='solid' colorScheme={'green'} onClick={handleSave} >Guardar</Button>
    </div>
  );
}

export default UploadImage;

