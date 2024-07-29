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

const DeleteAnything = ({ data, Service, event, showMore = false }) => {


  const _delete = async (id) => {
    const response = await Service(id);
    console.log(response);
    if (response.code !== 0) {
      event();
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



  const handleClick = async (id) => {
    event();
    Swal.fire({
      title: '¿Desea elminar este elemento?',
      text: 'El elemento será eliminado definitivamente',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        _delete(id);
      }
    });
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
            <TagLabel>{Object.entries(item)[1][1]}  {showMore ? ' -- ' + Object.entries(item)[2][1] : ''}{showMore}</TagLabel>
            <TagCloseButton onClick={() => handleClick(Object.entries(item)[0][1])} />
          </Tag>
        ))}
      </VStack>
    </div>
  )

}


export default DeleteAnything;
