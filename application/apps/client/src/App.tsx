import { Routes, Route } from 'react-router-dom'
import { HomePage } from "./components/HomePage/HomePage.js"
import { AboutPage } from "./components/AboutPage/AboutPage.js"
import { LoginPage } from './components/LoginPage/LoginPage.js'
import { RegisterPage } from "./components/RegisterPage/RegisterPage.js"
import { AuthRequire } from './contexts/auth/AuthRequire.js'
import './app_style.css'
import { UserPage } from './components/UserPage/UserPage.js'
import { InitiativePage } from './components/InitiativePage/InitiativePage.tsx'
import { InitiativeForm } from './components/InitiativeForms/initiative_forms.tsx'

import { NavBar } from './components/Navbar/navbar.tsx'

export const App = () => {

  return (
    <div className="app_background_div">
      <Routes>
        {/* Defina a rota inicial para /home */}
        <Route path="/" element={<HomePage />} />

        {/* Página de Início */}
        <Route path="/home" element={<HomePage />} />

        {/* Página de Sobre */}
        <Route path="/about" element={<AboutPage />} />

        {/* Página de Registro */}
        <Route path="/register" element={<RegisterPage />} />

        {/* Página de Login */}
        <Route path="/login" element={<LoginPage />} />

        <Route path='/UserPage' element={<AuthRequire><UserPage/></AuthRequire>} />

          {/* página da iniciativa */}
          <Route path='/main' element={<InitiativePage/>}/>
          
          <Route path='/InitiativeForms' element={<InitiativeForm/>}/>

          {/* página de perfil */}

          {/* testando navbar */}

          <Route path='/navbar' element={<NavBar/>}/>
          
      </Routes>
    </div>
  )
}
