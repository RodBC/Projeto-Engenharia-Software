import './app_style.css'
import {Routes, Route} from 'react-router-dom'
import { HomePage } from "./components/HomePage/HomePage.js"
import { AboutPage } from "./components/AboutPage/AboutPage.js"
// import { LoginPage } from "./components/LoginPage/LoginPage.js"
import LoginPage from './components/LoginPage/LoginPage.js'
import { RegisterPage } from "./components/RegisterPage/RegisterPage.js"
import { AuthRequire } from './contexts/AuthRequire.js'

export const App = () => {

  return (
    <div className="app_background_div">
      {/* <Navbar/> */}
      <Routes>
          {/* Página de Início */}
          <Route path="/home" element={<AuthRequire><HomePage/></AuthRequire>}/>

          {/* Página de Sobre */}
          <Route path="/about" element={<AuthRequire><AboutPage/></AuthRequire>}/>

          {/* Página de Contatos */}
          {/* <Route path="/contacts" element={<AboutPage/>}/> */}

          {/* Página de Usuário */}
          {/* <Route path="/user" element={<AboutPage/>}/> */}
          {/* Página de Iniciativas */}

          {/* página de registro */}
          <Route path="/register" element={<RegisterPage/>}/>

          {/* página de login */}
          <Route path="/login" element={<LoginPage/>}/>

      </Routes>
    </div>
  )
}

