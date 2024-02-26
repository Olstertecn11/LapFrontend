import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./views/Login"
import WelcomePage from './layouts/WelcomePage';
import Dashboard from './views/Dashboard';
import Container from './layouts/Container';

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element=<Login /> />
          <Route path="/Bienvenida" element=<WelcomePage /> />
          <Route path="/Dashboard" element=<Container Component={Dashboard} /> />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
