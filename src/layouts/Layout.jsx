import Navbar from "./Navbar";
import useSession from "../hooks/useSession";



const Layout = ({ Component }) => {




  const MySession = useSession();

  return (
    <div>
      <Navbar />
      <Component />
    </div>
  )
}


export default Layout;

