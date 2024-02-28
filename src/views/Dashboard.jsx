import GridCardList from "../components/GridCardList";
import { Stack, Heading, Text, Container } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <div style={{ background: '#b6d0d6', height: '100%' }}>
      {
        /*
              <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mt={'4'}>
                <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
                  Bienvenido al Sistema
                </Heading>
                <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
                  Esta es una plataforma interactiva para poder administrar los recursos academicos del Liceo Adventista el progreso
                </Text>
              </Stack>
                */
      }
      <GridCardList />
    </div>
  )
}


export default Dashboard;
