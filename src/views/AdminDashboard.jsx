import ControlBox from "../components/ControlsBox";
import { useDisclosure } from "@chakra-ui/react";
import { useState, useRef, useEffect } from 'react';
import { Text, useColorMode, useColorModeValue } from "@chakra-ui/react";

const AdminDashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  return (
    <div>
      <div className="container pt-4">
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
                  Gestion de maestros
                </Text>
              </div>
              <ControlBox refArr={[btnRef]} handleArr={[onOpen]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default AdminDashboard;
