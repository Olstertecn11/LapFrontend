import { useState, useEffect } from "react";
import axios from "axios";
import OverlayModal from "../components/OverlayModal";
import PdfPreviewer from "../layouts/PdfPreviewer";
import { useDisclosure } from "@chakra-ui/react";
import './styles/classFolder.css';
import PdfCard from '../components/PdfCard';
import { Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import FileService from '../services/files/FileService.js';
import StoreManagment from '../helpers/StorageManagement.js';
import { Text } from "@chakra-ui/react";



const ClassFolder = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [pdfList, setPdfList] = useState([]);
  const [pdfSelected, setPdfSelected] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { id } = useParams();
  const { role } = StoreManagment.getObject('session');


  const getPDF = async () => {
    const response = await FileService.getFiles();
    const filteredResponse = role === 1 ? response : response.filter((item) => item.id_clase == id);
    setPdfList(filteredResponse);
  }

  useEffect(() => {
    getPDF();
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('pdfFile', selectedFile);

    try {
      const response = await axios.post(`https://lap-backend-rflw.vercel.app/upload?id=${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert(response.data);
      getPDF();
    } catch (error) {
      console.error('Error al enviar el archivo:', error);
    }
  };



  const selectPdf = (selected) => {
    setPdfSelected(selected);
    onOpen();
  }

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-5 mx-auto">

          {
            pdfList.map((item, index) => (
              <PdfCard title={item.fecha_creacion.substring(0, 10)} stat={item.nombre} key={item.nombre + index} _class={'pdf-card'} click={() => selectPdf(item)} />
            ))
          }
        </div>
        <div className="col-md-5 mx-auto">
          <Text
            fontWeight={'bold'}
            fontSize={'3xl'}
            as={'span'}
            position={'relative'}
            mb={2}
            _after={{
              content: "''",
              width: 'full',
              height: '30%',
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'yellow.400',
              zIndex: -1,
            }}>
            Subir Planificación
          </Text>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="file" onChange={handleFileChange} accept=".pdf" />
            </div>
            <Button type="submit" colorScheme={'yellow'} >Guardar</Button>
          </form>
        </div>
      </div>
      <OverlayModal title={pdfSelected ? pdfSelected.nombre : ''} onOpen={onOpen} onClose={onClose} isOpen={isOpen} Component={() => <PdfPreviewer pdf={pdfSelected} />} />
    </div>
  );
}

export default ClassFolder
