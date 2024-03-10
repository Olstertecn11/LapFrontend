import {
  Tag,
  TagLabel,
  HStack,
  TagLeftIcon,
  TagRightIcon,
  VStack,
  TagCloseButton,
} from '@chakra-ui/react'

import Swal from 'sweetalert2'

const DeleteAnything = ({ data, Service, event }) => {

  console.log(data[0]);



  const handleClick = async (id) => {
    const response = await Service(id);
    event();
    console.log(response);
    if (response.code !== 0) {
      Swal.fire({
        title: 'Accion exitosa',
        text: 'Elemento eliminado',
        icon: 'success',
        confirmButtonText: 'Cool'
      });
    }
    else {
      Swal.fire({
        title: 'Peticion denegeada',
        text: 'Error al eliminar el elemento',
        icon: 'error',
        confirmButtonText: 'Cool'
      });
    }
  }


  return (
    <div>
      <VStack spacing={4} maxHeight="200px" overflowY="auto" align="flex-start">
        {data.map((item, index) => (
          <Tag
            size={'lg'}
            key={index}
            borderRadius='full'
            variant='subtle'
            colorScheme='red'
            fontSize='lg'
          >
            <TagLabel>{Object.entries(item)[1][1]}</TagLabel>
            <TagCloseButton onClick={() => handleClick(Object.entries(item)[0][1])} />
          </Tag>
        ))}
      </VStack>
    </div>
  )

}


export default DeleteAnything;
