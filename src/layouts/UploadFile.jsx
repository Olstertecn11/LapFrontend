import FileService from "../services/files/FileService";
import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'

const UploadFile = ({ event, updateData }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { id } = useParams();
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    event();
    const formData = new FormData();
    formData.append('pdfFile', selectedFile);

    try {
      const response = await FileService.upload(id, formData);
      console.log(response);
      if (response.status === 200) {
        Swal.fire({
          title: 'Accion Realizada',
          text: 'Archivo Subido',
          icon: 'success',
          confirmButtonText: 'Cool'
        });
        updateData();
      }
      else {
        Swal.fire({
          title: 'Accion Denegada',
          text: 'Error al subir el archivo',
          icon: 'error',
          confirmButtonText: 'Cool'
        });
      }
    } catch (error) {
      console.error('Error al enviar el archivo:', error);
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="file" accept=".pdf" onChange={handleFileChange} />
        </div>
        <Button type="submit" colorScheme={'green'} >Guardar</Button>
      </form>
    </div>
  )

}


export default UploadFile;
