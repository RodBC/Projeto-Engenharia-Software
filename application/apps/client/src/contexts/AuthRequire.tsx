import { useContext, useEffect } from "react";
import LoginPage from "../components/LoginPage/LoginPage";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export const AuthRequire:React.FC<{ children: React.ReactNode }> = ({children}) => {

    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!auth?.user) {
          // Navegue para a página de login quando o usuário não estiver autenticado
          navigate("/login");
        }
      }, [auth, navigate]);
    
      return auth?.user ? children : null;
}