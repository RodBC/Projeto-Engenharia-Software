import { Card } from "./components/Cards/card"
import {Navbar} from "./components/Navbar/navbar.jsx"
import {Locations} from "./components/LocationsCarrousel/Locations"
import './app_style.css'
import {Routes, Route} from 'react-router-dom'
import { HomePage } from "./components/HomePage/HomePage.js"
import { AboutPage } from "./components/AboutPage/AboutPage.js"

export const App = () => {

  return (
    <>
      <Navbar/>
      <Routes>
          {/* Página de Início */}
          <Route path="/inicio" element={<HomePage/>}/>

          {/* Página de Sobre */}
          <Route path="/sobre" element={<AboutPage/>}/>

          {/* Página de Contatos */}

          {/* Página de Usuário */}

          {/* Página de Iniciativas */}
      </Routes>
      
    </>
  )
}

export default App
