import { Routes, Route } from 'react-router-dom'
import { HomePage } from "./components/HomePage/HomePage.js"
import { AboutPage } from "./components/AboutPage/AboutPage.js"
import { LoginPage } from './components/LoginPage/LoginPage.js'
import { RegisterPage } from "./components/RegisterPage/RegisterPage.js"
// import { AuthRequire } from './contexts/auth/AuthRequire.tsx'
import './app_style.css'
import { UserPage } from './components/UserPage/UserPage.js'
import { InitiativePage } from './components/InitiativePage/InitiativePage.tsx'
import { InitiativeForm } from './components/InitiativeForms/initiative_forms.tsx'
import { useContext } from 'react'
import { AuthContext } from './contexts/auth/AuthContext.tsx'
import { Navigate } from 'react-router-dom'

export const App = () => {

  const auth = useContext(AuthContext)
 


  return (
    <div className="app_background_div">
      <Routes>
        {/* Defina a rota inicial para /home */}
        <Route path="/" element={<HomePage />} />

        {/* Página de Início */}
        <Route path="/home" element={<HomePage />} />

        {/* Página de Sobre */}
        <Route path="/about" element={<AboutPage /> }/>

        {/* Página de Registro */}
        <Route path="/register" element={<RegisterPage />} />

        {/* Página de Login */}
        <Route path="/login" element={<LoginPage />} />

        <Route path='/UserPage' element={auth?.isAuthenticated() ? <UserPage/> :  <Navigate to="/login" />} />

          {/* página da iniciativa */}
          <Route path='/main' element={<InitiativePage/>}/>
          
          <Route path='/InitiativeForms' element={<InitiativeForm/>}/>
          
      </Routes>
    </div>
  )
}
