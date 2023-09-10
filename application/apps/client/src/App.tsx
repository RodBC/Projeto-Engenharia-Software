import { Routes, Route } from 'react-router-dom'
import { HomePage } from "./components/HomePage/HomePage.js"
import { AboutPage } from "./components/AboutPage/AboutPage.js"
import { LoginPage } from './components/LoginPage/LoginPage.js'
import { RegisterPage } from "./components/RegisterPage/RegisterPage.js"
import { AuthRequire } from './contexts/auth/AuthRequire.js'
import './app_style.css'
import { UserPage } from './components/UserPage/UserPage.js'

export const App = () => {

  return (
    <div className="app_background_div">
      <Routes>
        {/* Defina a rota inicial para /home */}
        <Route path="/" element={<HomePage />} />

        {/* Página de Início */}
        <Route path="/home" element={<HomePage />} />

        {/* Página de Sobre */}
        <Route path="/about" element={<AuthRequire><AboutPage /></AuthRequire>} />

        {/* Página de Registro */}
        <Route path="/register" element={<RegisterPage />} />

        {/* Página de Login */}
        <Route path="/login" element={<LoginPage />} />

        <Route path='/UserPage' element={<AuthRequire><UserPage/></AuthRequire>} />

      </Routes>
    </div>
  )
}
