import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { parseCookies } from "nookies";

export const AuthRequire: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [isAuthChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const cookies = parseCookies(); // Lê os cookies

    if (!auth?.user && !cookies["reactauth.token"]) {
      // Se o usuário não estiver autenticado e não houver token nos cookies, navegue para a página de login
      navigate("/login");
    }

    setAuthChecked(true); // Marca a autenticação como verificada
  }, [auth, navigate]);

  if (!isAuthChecked) {
    return null; // Aguarde a verificação da autenticação antes de renderizar o conteúdo
  }

  return auth?.user ? children : null;
};