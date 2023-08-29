import {Navbar} from "./components/Navbar/navbar.jsx"
import {Routes, Route} from 'react-router-dom'
import { HomePage } from "./components/HomePage/HomePage.js"
import { AboutPage } from "./components/AboutPage/AboutPage.js"
import { Footer } from "./components/Footer/Footer.js"
import './app_style.css'

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
      <Footer />
      
    </>
  )
}

export default App
