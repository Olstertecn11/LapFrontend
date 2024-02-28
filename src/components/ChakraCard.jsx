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
import { useNavigate } from 'react-router-dom'

const ChakraCard = ({ heading, description, icon, href, callback }) => {

  const history = useNavigate();

  const handleRedirect = (link) => {
    history(link)
    if (callback) callback();
  }
  return (
    <Box
      boxShadow={'2xl'}
      background={'white'}
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'} color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <Button variant={'ghost'} colorScheme={'blue'} size={'sm'} onClick={() => handleRedirect(href)} >
          Visitar
        </Button>
      </Stack>
    </Box>
  )
}

export default ChakraCard;
