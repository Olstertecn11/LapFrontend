
import { Button, useDisclosure } from "@chakra-ui/react";
import OverlayModal from "./OverlayModal";
import DeleteAnything from "./DeleteAnything";
import '../styles/components/ControlBox.css';




const ControlBox = ({ refArr, handleArr, data, updateData, deleteData, showMore }) => {


  console.log(handleArr);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const closeEvent = () => {
    updateData();
    onClose();
  }


  const handleKey = (e) => {
    handleArr[1]();

  }

  return (
    <div className="">
      <div className="card shadow p-4 mb-5 rounded" style={{ height: '15vh', width: '35vw', background: '#4e6e8a24 ' }}>
        <div className="control-buttons-container">
          <input ref={refArr[2]} type="text" onKeyDown={handleKey} className="form-control search-control" placeholder="Buscar..." />
          <Button ref={refArr[1]} onClick={handleArr[1]} colorScheme={'blue'} className='w-15 ' > <i className='fa-solid fa-magnifying-glass'></i></Button>
          <Button ref={refArr[0]} onClick={handleArr[0]} colorScheme={'green'} className='w-15 ' > <i className='fa-solid fa-plus'></i></Button>
          <Button colorScheme={'red'} onClick={onOpen} className='w-15' > <i className='fa-solid fa-trash'></i></Button>
        </div>
      </div>
      {data && data.length !== 0 ? (
        < OverlayModal size="xl" type={2} title={'Eliminar Elemento'} onOpen={onOpen} onClose={onClose} isOpen={isOpen} Component={() => <DeleteAnything Service={deleteData} data={data} event={closeEvent} showMore={showMore} />} />
      ) :
        ''
      }
    </div>

  )
}

export default ControlBox;
