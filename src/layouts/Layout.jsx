import Navbar from "./Navbar";
import { ChakraProvider } from "@chakra-ui/react";
const Layout = ({ Component }) => {
  return (
    <ChakraProvider>
      <Navbar />
      <Component />
    </ChakraProvider>
  )
}


export default Layout;

