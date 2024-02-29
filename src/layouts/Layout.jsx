import Navbar from "./Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import useSession from "../hooks/useSession";




const Layout = ({ Component }) => {

  const MySession = useSession();

  return (
    <ChakraProvider>
      <Navbar />
      <Component />
    </ChakraProvider>
  )
}


export default Layout;

