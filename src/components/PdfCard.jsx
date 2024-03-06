import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react'
const PdfCard = (props) => {
  const { title, stat, _class, click } = props
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      onClick={click}
      shadow={'xl'}
      border={'1px solid'}
      className={_class}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  )
}

export default PdfCard;
