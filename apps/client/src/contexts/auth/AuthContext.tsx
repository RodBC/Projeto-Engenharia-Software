  import { createContext, useContext } from "react";
  import { AuthContextType } from "../../types/AuthContext";

  export const AuthContext = createContext<AuthContextType | undefined>(undefined);

  export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }
    return context;
  };

  
