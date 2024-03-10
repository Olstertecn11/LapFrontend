import { useState, useEffect } from "react";
import OverlayModal from "../components/OverlayModal";
import PdfPreviewer from "../layouts/PdfPreviewer";
import { useDisclosure } from "@chakra-ui/react";
import './styles/classFolder.css';
import PdfCard from '../components/PdfCard';
import { useParams } from "react-router-dom";
import FileService from '../services/files/FileService.js';
import StoreManagment from '../helpers/StorageManagement.js';
import ControlBox from "../components/ControlsBox";
import Sidebar from "../components/Sidebar";
import { useRef } from "react";
import UploadFile from "../layouts/UploadFile";


const ClassFolder = () => {
  const [pdfList, setPdfList] = useState([]);
  const [pdfSelected, setPdfSelected] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isOpenS, onOpen: onOpenS, onClose: onCloseS } = useDisclosure()
  console.log(isOpenS);
  console.log(isOpen);
  const { id } = useParams();
  const { role } = StoreManagment.getObject('session');

  const sideOpenRef = useRef();


  const getPDF = async () => {
    const response = await FileService.getFiles();
    const filteredResponse = role === 1 ? response : response.filter((item) => item.id_clase == id);
    setPdfList(filteredResponse);
  }

  useEffect(() => {
    getPDF();
  }, []);



  const selectPdf = (selected) => {
    setPdfSelected(selected);
    onOpen();
  }

  return (
    <div className="container p-4">
      <ControlBox refArr={[sideOpenRef]} handleArr={[onOpenS]} />
      <div className="row">
        {
          pdfList.map((item, index) => (
            <div className="col-md-4" key={item.nombre + index}>
              <PdfCard title={item.fecha_creacion.substring(0, 10)} stat={item.nombre} _class={'pdf-card'} click={() => selectPdf(item)} />
            </div>
          ))
        }
      </div>
      <Sidebar updateData={getPDF} Component={UploadFile} onOpen={onOpenS} onClose={onCloseS} isOpen={isOpenS} title={'Subir Archivo'} btnRef={sideOpenRef} />
      <OverlayModal title={pdfSelected ? pdfSelected.nombre : ''} onOpen={onOpen} onClose={onClose} isOpen={isOpen} Component={() => <PdfPreviewer pdf={pdfSelected} />} />
    </div>
  );
}

export default ClassFolder
