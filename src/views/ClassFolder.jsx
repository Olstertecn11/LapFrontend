import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import OverlayModal from "../components/OverlayModal";
import PdfPreviewer from "../layouts/PdfPreviewer";
import { useDisclosure } from "@chakra-ui/react";
import './styles/classFolder.css';
import PdfCard from '../components/PdfCard';
import { Button } from "@chakra-ui/react";




const ClassFolder = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [pdfList, setPdfList] = useState([]);
  const [pdfSelected, setPdfSelected] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure()


  const getPDF = () => {
    fetch('http://localhost:3000/pdfs')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPdfList(data);
      })
      .catch(error => {
        console.error('Error al obtener los archivos PDF:', error);
      });
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
      const response = await axios.post('http://localhost:3000/upload', formData, {
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
              <PdfCard title={'PDF'} stat={item.nombre} key={item.nombre + index} _class={'pdf-card'} click={() => selectPdf(item)} />
              // <li onClick={() => selectPdf(item)} key={item.nombre + index}>{item.nombre}</li>
            ))
          }
        </div>
        <div className="col-md-5 mx-auto">
          <h1>Subir PDF</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="file" onChange={handleFileChange} accept=".pdf" />
            </div>
            <Button type="submit" colorScheme={'yellow'} >Subir PDF</Button>
          </form>
        </div>
      </div>
      <OverlayModal onOpen={onOpen} onClose={onClose} isOpen={isOpen} Component={() => <PdfPreviewer pdf={pdfSelected} />} />
    </div>
  );
}

export default ClassFolder
