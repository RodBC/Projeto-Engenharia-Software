import { Routes, Route } from 'react-router-dom'
import { HomePage } from "./components/HomePage/HomePage.js"
import { AboutPage } from "./components/AboutPage/AboutPage.js"
import { LoginPage } from './components/LoginPage/LoginPage.js'
import { RegisterPage } from "./components/RegisterPage/RegisterPage.js"
import { UserPage } from './components/UserPage/UserPage.js'
import { InitiativePage } from './components/InitiativePage/InitiativePage.tsx'
import { UserForm } from './components/userForms/userForms.tsx'
import { useContext } from 'react'
import { AuthContext } from './contexts/auth/AuthContext.tsx'
import { Navigate } from 'react-router-dom'
import { InitiativeForm } from './components/InitiativeForm/InitiativeForm.tsx'
import './app_style.css'

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

        <Route path='/UserPage' element={auth?.authenticated ? <UserPage/> :  <Navigate to="/login" />} />

        <Route path='/Initiative/:id' element={auth?.authenticated ? <InitiativePage/>: <Navigate to="/login"/>} />
        
        <Route path='/UserForm' element={<UserForm/>}/>

        <Route path='/InitiativeForm' element={auth?.authenticated ? <InitiativeForm/> : <Navigate to="/login" /> } />
        
      </Routes>
    </div>
  )
}
