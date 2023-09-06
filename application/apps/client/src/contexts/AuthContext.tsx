  import React, { createContext, useContext, useState, useEffect} from "react";
  import { api } from "./services/api";
  import { setCookie, parseCookies } from "nookies";


  type User = {
    id: number;
  };

  type AuthContextType = {
    user: User | null;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => void;
    isAuthenticated: boolean;
  };

  export const AuthContext = createContext<AuthContextType | undefined>(undefined);

  export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }
    return context;
  };

  export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children })  => {

    const [user, setUser] = useState<User | null>(null);
    

    const signIn = async (email: string, password: string) => {
      try {
        const response = await api.post("/api/auth/sign-in", {
          email,
          password,
        });

        const access_token = response.data.access_token 
        const user_id = response.data.user_id;

        setCookie(undefined, 'reactauth.token', access_token, {
          maxAge: 60 * 60 * 1 // 1 hour
        });
        setCookie(undefined, 'reactauth.user_id', user_id.toString(), {
          maxAge: 60 * 60 * 1 // 1 hour
        });

      setUser({ id: user_id });

      } catch (error) {
        console.error("Erro ao fazer login:", error);
        throw error;
      }
    };

    useEffect(() => {
      const cookies = parseCookies();
      const id = cookies["reactauth.user_id"];
      const token = cookies["reactauth.token"];

      async function validateToken(){
      
      if(token && id){

        const response = await api.get(`api/user/?userId=${Number(id)}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const user_id = response.data.id
        setUser( {id: user_id} )
       
      }}
      validateToken()

    }, [api]); // Isso garantirá que o efeito seja disparado sempre que o estado do user mudar
  


    const signOut = () => {
      setUser(null);
    };


    const isAuthenticated = user !== null;

    return (
      <AuthContext.Provider value={{ user, signIn, signOut, isAuthenticated }}>
        {children}
      </AuthContext.Provider>
    );
  };



