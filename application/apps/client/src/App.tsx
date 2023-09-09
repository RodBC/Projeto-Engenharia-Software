import './app_style.css'
import {Routes, Route} from 'react-router-dom'
import { HomePage } from "./components/HomePage/HomePage.js"
import { AboutPage } from "./components/AboutPage/AboutPage.js"
// import { LoginPage } from "./components/LoginPage/LoginPage.js"
import { LoginPage } from './components/LoginPage/LoginPage.js'
import { RegisterPage } from "./components/RegisterPage/RegisterPage.js"
import { AuthRequire } from './contexts/auth/AuthRequire.js'
import { InitiativePage } from './components/InitiativePage/InitiativePage.tsx'
import { InitiativeForm } from './components/InitiativeForms/initiative_forms.tsx'

export const App = () => {

  return (
    <div className="app_background_div">
      {/* <Navbar/> */}
      <Routes>
          {/* Página de Início */}
          <Route path="/home" element={<HomePage/>}/>

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

          {/* página da iniciativa */}
          <Route path='/main' element={<InitiativePage/>}/>
          <Route path='/InitiativeForms' element={<InitiativeForm/>}/>

      </Routes>
    </div>
  )
}

