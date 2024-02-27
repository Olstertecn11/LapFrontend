import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./views/Login"
import WelcomePage from './layouts/WelcomePage';
import Dashboard from './views/Dashboard';
import Container from './layouts/Container';
import Navbar from "./layouts/Navbar";
import Gallery from "./views/Gallery";
import Layout from "./layouts/Layout";

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element=<Login /> />
          <Route path="/Bienvenida" element=<WelcomePage /> />
          <Route path="/Dashboard" element={<Layout Component={Dashboard} />} />
          <Route path="/Gallery" element={<Layout Component={Gallery} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
