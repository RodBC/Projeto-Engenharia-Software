import './app_style.css'
import {Routes, Route} from 'react-router-dom'
import { HomePage } from "./components/HomePage/HomePage.js"
import { AboutPage } from "./components/AboutPage/AboutPage.js"
import { ContactPage } from "./components/ContactPage/contact.tsx"
import { LoginPage } from "./components/LoginPage/LoginPage.js"
import { RegisterPage } from "./components/RegisterPage/RegisterPage.js"

export const App = () => {

  return (
    <div className="app_background_div">
      {/* <Navbar/> */}
      <Routes>
          {/* Página de Início */}
          <Route path="/home" element={<HomePage/>}/>

          {/* Página de Sobre */}
          <Route path="/about" element={<AboutPage/>}/>

          {/* Página de Contatos */}
          <Route path="/contacts" element={<ContactPage/>}/>

          {/* Página de Usuário */}
          <Route path="/user" element={<AboutPage/>}/>
          {/* Página de Iniciativas */}

          {/* página de registro */}
          <Route path="/register" element={<RegisterPage/>}/>

          {/* página de login */}
          <Route path="/login" element={<LoginPage/>}/>

      </Routes>
    </div>
  )
}

