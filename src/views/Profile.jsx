import StoreManagment from '../helpers/StorageManagement';
import { Card, CardHeader, Stack, Heading, Divider, ButtonGroup, Button, Image, CardBody, CardFooter, Text } from '@chakra-ui/react'
import { BiUpload } from 'react-icons/bi';
import { FcSettings } from "react-icons/fc";
import { useEffect, useState } from 'react';
import UserService from '../services/user/UserService';
import profileImg from '../assets/profile.png';
import Notify from '../components/Notify';
import useSession from '../hooks/useSession';





const Profile = () => {

  const { idUsr } = StoreManagment.getObject('session');
  const [profile, setProfile] = useState({
    usr_id: 0,
    usr_name: "",
    usr_surname: "",
    usr_username: "",
    usr_password: "",
    usr_email: "",
    usr_phone: "",
    usr_dpi: "",
    usr_privileges: 0,
    usr_image: "",
    usr_status: 0
  });




  const handleButtonClick = () => {
    document.getElementById("fileInput").click();
  };



  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };

  const fetchData = async () => {
    const response = await UserService.getAttributes(idUsr);
    setProfile(response);
  }


  const saveChanges = async () => {
    var userSession = JSON.parse(localStorage.getItem('session'));
    userSession.img = profile.usr_image;
    localStorage.setItem("session", JSON.stringify(userSession));
    const response = await UserService.updateAttributes(idUsr, profile.usr_name, profile.usr_surname, profile.usr_dpi, profile.usr_phone, profile.usr_image)
    const { code, message } = response;
    if (code === 1) {
      Notify('Perfil actualizado correctamente', 'Operacion Exitosa', "success");
      window.location.reload();
    }
    else {
      Notify('Error de Operación', message, 'error');
    }
  }

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const base64Image = reader.result;
      setProfile((prevState) => ({
        ...prevState,
        usr_image: base64Image
      }));
    };

    reader.readAsDataURL(selectedImage);
  };


  useEffect(() => {
    fetchData();
  }, [])


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
                    boxSize='250px'
                    m='auto'
                    p={4}
                    fit='cover'
                    src={profile.usr_image.length > 0 ? profile.usr_image : profileImg}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    border={profile.usr_image.length > 0 ? 'solid 1px green' : 'solid 1px red'}
                  />
                </CardBody>
                {profile.usr_image.length <= 0 ? (
                  <small className='text-muted text-center'>Sin fotografia</small>
                ) :
                  (
                    <a className='text-center' onClick={() => setProfile((prev) => ({ ...prev, usr_image: '' }))} ><small className='text-muted text-center'>Quitar Fotografia</small></a>
                  )
                }
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing='2'>
                    <input
                      type="file"
                      id="fileInput"
                      key={profile.usr_image}
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleImageChange}
                    />
                    <Button variant='solid' colorScheme='blue' onClick={saveChanges}>
                      Actualizar Perfil
                    </Button>
                    <Button variant='ghost' colorScheme='blue' onClick={handleButtonClick}>
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
                <input type="text" name="usr_surname" value={profile.usr_surname} onChange={handleChange} className={`form-control ${profile.usr_surname.length > 0 ? 'is-valid' : 'is-invalid'}`} />
              </div>
              <div className="form-group">
                <label htmlFor="">Telefono</label>
                <input type="text" name="usr_phone" className={`form-control ${profile.usr_phone.length > 0 ? 'is-valid' : 'is-invalid'}`} value={profile.usr_phone} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="">Nombre</label>
                <input type="text" name="usr_name" value={profile.usr_name} onChange={handleChange} className={`form-control ${profile.usr_name.length > 0 ? 'is-valid' : 'is-invalid'}`} />
              </div>
              <div className="form-group">
                <label htmlFor="">DPI</label>
                <input type="text" name="usr_dpi" value={profile.usr_dpi} onChange={handleChange} className={`form-control ${profile.usr_dpi.length > 0 ? 'is-valid' : 'is-invalid'}`} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}



export default Profile;
