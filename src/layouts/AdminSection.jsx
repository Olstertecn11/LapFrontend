
import { useDisclosure, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import ControlBox from "../components/ControlsBox";
import { useRef } from 'react';
import useFetch from '../hooks/useFetch';
import Sidebar from '../components/Sidebar';
import DataTable from "../components/DataTable";
import { useEffect } from "react";


const AdminSection = ({ margin = '2vw', title, ServiceGet, ServiceDelete, titleNew, ComponentNew }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  const { data, isPending, error, updateData } = useFetch(ServiceGet, [ServiceGet]);



  return (
    <div style={{ marginTop: margin }}>
      <div className="card p-4">
        <div className="row">
          <div className="col-md-6">
            <div className="pl-0 ml-0 pt-4">
              <Text
                className="text-center"
                ml={4}
                textTransform="uppercase"
                width={'60%'}
                bg='#dae9f7'
                color='#408493'
                px={3}
                py={1}
                fontSize="sm"
                fontWeight="600"
                rounded="xl">
                {title}
              </Text>
            </div>
            <div className="container ml-p pl-0">
              <ControlBox refArr={[btnRef]} handleArr={[onOpen]} data={data} updateData={updateData} deleteData={ServiceDelete} />
            </div>
            <Sidebar updateData={updateData} Component={ComponentNew} onOpen={onClose} onClose={onClose} isOpen={isOpen} title={titleNew} btnRef={btnRef} />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 ">
            {data && data ? (
              <DataTable data={data} />
            ) : ''
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminSection;

