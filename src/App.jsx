import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./views/Login"
import WelcomePage from './layouts/WelcomePage';
import Dashboard from './views/Dashboard';
import Container from './layouts/Container';
import Navbar from "./layouts/Navbar";
import GalleryEvents from "./views/Gallery";
import GalleryImages from "./views/GalleryImages";
import Layout from "./layouts/Layout";
import NotFound from "./views/NotFound";
import CoursePrograms from "./views/CoursePrograms";
import ClassFolder from "./views/ClassFolder";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element=<Login /> />
          <Route path="/Bienvenida" element=<WelcomePage /> />
          <Route path="/Dashboard" element={<Layout Component={Dashboard} />} />
          <Route path="/Galeria" element={<Layout Component={GalleryEvents} />} />;
          <Route path="/GaleriaImagenes/:id" element={<Layout Component={GalleryImages} />} />
          <Route path="/Documentos" element={<Layout Component={CoursePrograms} />} />
          <Route path="/Clase/:id" element={<Layout Component={ClassFolder} />} />
          <Route path="*" element={<Layout Component={NotFound} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
