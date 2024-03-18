import StoreManagment from '../helpers/StorageManagement';
import { Card, CardHeader, Stack, Heading, Divider, ButtonGroup, Button, Image, CardBody, CardFooter, Text } from '@chakra-ui/react'
import { BiUpload } from 'react-icons/bi';
import { FcSettings } from "react-icons/fc";
const Profile = () => {

  const { idUsr, username } = StoreManagment.getObject('session');


  return (
    <div className='pb-4'>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-1">
            <FcSettings size={70} />
          </div>
          <div className="col-md-8">
            <Text
              as={'span'}
              fontSize={'3vw'}
              fontWeight='bold'
              color='blue.800'
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '15%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.200',
                zIndex: -1,
              }}>
              Configuracion de perfil
            </Text>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: '4vw' }}>
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div className="form-group">
              <Card maxW='sm'>
                <CardBody>
                  <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                  />
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                      Actualizar Perfil
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                      Nueva Foto <BiUpload className="ml-2" />
                    </Button>
                  </ButtonGroup>
                </CardFooter>
                <small className='text-muted mb-2 text-center'>Actualizar perfil permitirá guardar los cambios realizados en su perfil</small>
              </Card>
            </div>
          </div>
          <div className="col-md-5 mx-auto">
            <div className="form-group">
              <div className="form-group">
                <label htmlFor="">Apellido</label>
                <input type="text" name="" id="" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="">Telefono</label>
                <input type="text" name="" id="" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="">Nombre</label>
                <input type="text" name="" id="" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="">DPI</label>
                <input type="text" name="" id="" className="form-control" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}



export default Profile;
