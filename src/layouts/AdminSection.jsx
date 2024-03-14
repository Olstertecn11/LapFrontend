import { useDisclosure, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import ControlBox from "../components/ControlsBox";
import { useRef } from 'react';
import useFetch from '../hooks/useFetch';
import Sidebar from '../components/Sidebar';
import DataTable from "../components/DataTable";


const AdminSection = ({ title, ServiceGet, ServiceDelete, titleNew, ComponentNew }) => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  const { data, isPending, error, updateData } = useFetch(ServiceGet, []);
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="pl-4 pt-4">
              <Text
                className="text-center text-white"
                ml={4}
                textTransform="uppercase"
                width={'60%'}
                bg={useColorModeValue('blue.400', 'blue.700')}
                px={3}
                py={1}
                fontSize="sm"
                fontWeight="600"
                rounded="xl">
                {title}
              </Text>
            </div>
            {data && data ?
              (<ControlBox refArr={[btnRef]} handleArr={[onOpen]} data={data.data} updateData={updateData} deleteData={ServiceDelete} />) :
              ''
            }
            <Sidebar updateData={updateData} Component={ComponentNew} onOpen={onClose} onClose={onClose} isOpen={isOpen} title={titleNew} btnRef={btnRef} />
          </div>
        </div>
        <div className="col-md-6 mx-auto">
          {data && data ?
            (<DataTable data={data !== undefined ? data.data : []} />)
            : ''
          }
        </div>
      </div>
    </div>
  )
}



export default AdminSection;
