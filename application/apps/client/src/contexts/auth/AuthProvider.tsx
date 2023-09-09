import { AuthContext } from "./AuthContext";
import { User } from "../../types/User";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import { useState, useEffect} from "react";
import { useApi } from "../../hooks/useApi";
import jwtDecode from "jwt-decode";

interface DecodedToken {
  sub: number; 
  exp: number;
  iat: number;
  email: string;
}

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
          setUser( {id: response.id, name:response.name} )

        }}
        validateToken()
    }, [Api]); 
    

    const signIn = async (email: string, password: string) => {
      try {
        const response = await Api.signIn(email, password)

        const access_token = response.data.access_token 

        const decodedToken = jwtDecode<DecodedToken>(access_token);

        setCookie(undefined, 'reactauth.token', access_token, {
          maxAge: 60 * 60 * 1// 1 hour
        });
        setCookie(undefined, 'reactauth.user_id', decodedToken.sub.toString(), {
          maxAge: 60 * 60 * 1 // 1 hour
        });
        setUser({ id: decodedToken.sub, name: "" });

      } catch (error) {
        console.error("Erro ao fazer login:", error);
        throw error;
      }
    };

    const signUp = async (email:string, password:string, name:string) => {
      try{
        const response = await Api.signUp(email, password, name)

        setUser( { id: response.id , name:response.name } )
      } catch(error){
        console.error("Erro ao cadastrar:", error);
        throw error;
      }
    };

    const signOut = () => {

      destroyCookie(null, "reactauth.user_id", { path: '/' })
      destroyCookie(null, "reactauth.token", { path: '/' })
      setUser(null);
    };

    const isAuthenticated = user !== null;

    return (
      <AuthContext.Provider value={{ user, signIn, signOut, signUp, isAuthenticated }}>
        {children}
      </AuthContext.Provider>
    );
  };


