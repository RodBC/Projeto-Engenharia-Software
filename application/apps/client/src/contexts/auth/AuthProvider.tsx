import { AuthContext } from "./AuthContext";
import { User } from "../../types/User";
import { setCookie, parseCookies } from "nookies";
import { useState, useEffect} from "react";
import { useApi } from "../../hooks/useApi";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children })  => {

    const [user, setUser] = useState<User | null>(null);
    const Api = useApi()

    useEffect(() => {

      const validateToken = async () => {
        const cookies = parseCookies();
        const id = cookies["reactauth.user_id"];
        const token = cookies["reactauth.token"];
      
        if(token && id){

          const response = await Api.validateToken(token, id)
          setUser( {id: response.id} )
        }}
        validateToken()
    }, [Api]); 
    

    const signIn = async (email: string, password: string) => {
      try {
        const response = await Api.signIn(email, password)

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


