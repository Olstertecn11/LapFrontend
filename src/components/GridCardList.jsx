import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'


import {
  FcGallery,
  FcContacts,
  FcGraduationCap,
  FcAdvertising
} from 'react-icons/fc'
import ChakraCard from './ChakraCard'





const GridChakraCardList = ({ callback }) => {
  return (
    <Box p={4}>

      <Container maxW={'4xl'} mt={12} mb={10} > <Flex flexWrap="wrap" gridGap={6} justify="center">
        <ChakraCard
          callback={callback}
          heading={'Planes de Cursos'}
          icon={<Icon as={FcGraduationCap} w={10} h={10} />}
          description={'En esta seccion podra subir los planes de curso para cada grado'}
          href={'/Documentos'}
        />
        <ChakraCard
          callback={callback}
          heading={'Galeria de Eventos'}
          icon={<Icon as={FcGallery} w={10} h={10} />}
          description={'Podra navegar por los diferentes eventos realizados en el colegio y ver las imagenes'}
          href={'/Galeria'}
        />
        <ChakraCard
          callback={callback}
          heading={'Asistencia'}
          icon={<Icon as={FcContacts} w={10} h={10} />}
          description={'Tome la asistencia del grado correspondiente'}
          href={'/Asistencia'}
        />
        <ChakraCard
          callback={callback}
          heading={'Noticias'}
          icon={<Icon as={FcAdvertising} w={10} h={10} />}
          description={'Podrá ver las noticias creadas por la adminsitracion del colegio'}
          href={'/Noticias'}
        />
      </Flex>
      </Container>
    </Box>
  )
}
export default GridChakraCardList;
