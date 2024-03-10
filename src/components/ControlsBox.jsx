
import { Button, useDisclosure } from "@chakra-ui/react";
import OverlayModal from "./OverlayModal";
import DeleteAnything from "./DeleteAnything";




const ControlBox = ({ refArr, handleArr, data, updateData, deleteData }) => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const closeEvent = () => {
    updateData();
    onClose();
  }



  return (
    <div className="row ml-0 mr-0">
      <div className="col-md-4 mr-auto ml-4 mt-4">
        <div className="card shadow p-3 mb-5 rounded" style={{ height: '15vh', width: '25vw', background: '#4e6e8a24 ' }}>
          <div className="row">
            <Button ref={refArr[0]} onClick={handleArr[0]} colorScheme={'green'} className='w-15 mr-auto ml-4 mt-2' > <i className='fa-solid fa-plus'></i></Button>
            <Button colorScheme={'red'} onClick={onOpen} className='w-15 mr-auto ml-4 mt-2' > <i className='fa-solid fa-trash'></i></Button>
            <Button colorScheme={'blue'} onClick={handleArr[2]} className='w-15 mr-auto ml-4 mt-2' > <i className='fa-solid fa-magnifying-glass'></i></Button>
          </div>
        </div>
      </div>
      {data && data.length !== 0 ? (
        < OverlayModal size="xl" type={2} title={'Eliminar Elemento'} onOpen={onOpen} onClose={onClose} isOpen={isOpen} Component={() => <DeleteAnything Service={deleteData} data={data} event={closeEvent} />} />
      ) :
        ''
      }
    </div>

  )
}

export default ControlBox;
