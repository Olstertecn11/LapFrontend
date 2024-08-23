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
import { Text } from "@chakra-ui/react";
import { BeatLoader } from "react-spinners";


const ClassFolder = () => {
  const [pdfListOriginal, setPdfListOriginal] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pdfList, setPdfList] = useState([]);
  const [pdfSelected, setPdfSelected] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isOpenS, onOpen: onOpenS, onClose: onCloseS } = useDisclosure()
  const { id } = useParams();
  const { idUsr, role } = StoreManagment.getObject('session');

  const sideOpenRef = useRef();
  const searchRef = useRef();

  const handleSearch = () => {
    const textToSearch = searchRef.current.value.toLowerCase();
    if (textToSearch.length == 0) getPDF()
    const filtered = pdfListOriginal.filter(item =>
      Object.values(item).some(value =>
        typeof value === 'string' && value.toLowerCase().includes(textToSearch)
      )
    );
    setPdfList(filtered)
  }

  const getPDF = async () => {
    const response = await FileService.getFiles();
    const filteredResponse = response.filter((item) => item.id_clase == id);
    setLoading(false);
    setPdfListOriginal(filteredResponse);
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
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">

            <div className="d-flex flex-column flex-nowrap align-items-start">
              <Text
                fontWeight={'bold'}
                as={'span'}
                color={'blue.900'}
                fontSize={'3xl'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.100',
                  zIndex: -1,
                }}>
                Archivos del docente
              </Text>
              <Text as={'span'} color={'blue.600'} ml={'2'} fontSize={'1xl'} fontWeight={'bold'} >
                En esta sección podrá visualizar los archivos correspondientes al curso seleccionado
              </Text>
            </div>
          </div>
          <div className="col-md-6">
            <div className="controls-container" style={{ marginLeft: '6vw' }}>
              <ControlBox refArr={[sideOpenRef, null, searchRef]} handleArr={[onOpenS, handleSearch]} data={pdfListOriginal} deleteData={FileService.delete} updateData={getPDF} />
            </div>
          </div>
        </div>
      </div>
      <div className="container p-4">
        <div className="row">
          {loading && loading ? (
            <div className="contenedor mx-auto mt-4">
              <BeatLoader color="#36d7b7" size={34} />
            </div>
          ) : ''}
          {
            pdfList.map((item, index) => (
              <div className="col-md-4" key={item.nombre + index}>
                <PdfCard title={item.fecha_creacion.substring(0, 10)} stat={item.nombre} _class={'pdf-card'} click={() => selectPdf(item)} />
              </div>
            ))
          }
        </div>
        <Sidebar updateData={getPDF} Component={UploadFile} onOpen={onOpenS} onClose={onCloseS} isOpen={isOpenS} title={'Subir Archivo'} btnRef={sideOpenRef} />
        <OverlayModal size={'6xl'} title={pdfSelected ? pdfSelected.nombre : ''} onOpen={onOpen} onClose={onClose} isOpen={isOpen} Component={() => <PdfPreviewer pdf={pdfSelected} _class={id} user={idUsr} _onClose={onClose} update={getPDF} />} />
      </div>
    </div>
  );
}

export default ClassFolder
