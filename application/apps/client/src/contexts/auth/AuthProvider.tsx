import { AuthContext } from "./AuthContext";
import { User } from "../../types/User";
import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ( {children} ) => {

  const [user, setUser] = useState<User | null>(null);
  const [authenticated, setAuthenticated] = useState(false);

  const Api = useApi();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setAuthenticated(true)
      const userFromLocalStorage = JSON.parse(storedUser);
      setUser(userFromLocalStorage.data);
    }
  }, []);


  const signIn = async (email: string, password: string) => {
    try {
      const response = await Api.signIn(email, password);
      setAuthenticated(true)
  
      const userExpirationTimeInSeconds = 3600; // Tempo de expiração em segundos (30 segundos)
      const expirationTimestamp = Date.now() + userExpirationTimeInSeconds * 1000;
  
      const userToStore = {
        data: response.data,
        expiration: expirationTimestamp,
      };
  
      localStorage.setItem("user", JSON.stringify(userToStore)); 
  
      setTimeout(() => {
        localStorage.removeItem("user");
        setUser(null);
        window.location.reload()
      }, userExpirationTimeInSeconds * 1000);
  
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  };

  const signUp = async (email: string, password: string, name: string) => {
    try {
      const response = await Api.signUp(email, password, name);

    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      throw error;
    }
  };

  const logOut = async () => {
    try {
      setAuthenticated(false)
      localStorage.clear();
      const response = await Api.logOut();
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  const getAllInitiatives = async () => {
    try {
      const response = await Api.getAllInitiatives();
      return response.data;
    } catch (error) {
      console.error("Erro ao utilizar a api de obter iniciativas", error);
      throw error;
    }
  };

  const getUser = async (Id: number) => {

    try {
      const response = await Api.getUser(Id);

      // setUser(response.data)
    } catch (error) {
      console.error("Erro ao obter usuário", error);
      throw error;
    }
  };

  const updateUser = async (imgUrl:string, bannerUrl:string, description:string, ) => {

    try {
      const response = await Api.updateUser(imgUrl, bannerUrl, description);
      setUser(response.data)
     
    } catch (error) {
      console.error("Erro ao atualizar usuário", error);
      throw error;
    }
  };

  const createInitiative = async (
    name: string,
    description: string,
    bairro: string,
    icon: string | null,
    images: string | null,
    socials: string | null,
  ) => {

    try {
      const response = await Api.createInitiative(
        name,
        description,
        bairro,
        icon,
        images,
        socials,
      );
      return response.data
    } catch (error) {
      console.error("Erro ao chamar a api de criação:", error);
      throw error;
    }
  };

  const getOneInitiative = async (id:number) => {
    try {
      const response = await Api.getOneInitiative(id);

      return response
     
    } catch (error) {
      console.error("Erro ao atualizar usuário", error);
      throw error;
    }
  };

  const createLike = async (id:number) => {
    try {
      const response = await Api.createLike(id);

      return response;
    } catch (error) {
      console.error(`Erro ao criar curtida:`, error);
      throw error;
    }
  };

  const deleteLike = async (id:number) => {
    try {
      const response = await Api.deleteLike(id);

      return response;
    } catch (error) {
      console.error(`Erro ao criar curtida:`, error);
      throw error;
    }
  };

  const getUserLikes= async () => {
    try {
      const response = await Api.getUserLikes()
      console.log(response)

      return response.data;
    } catch (error) {
      console.error(`Erro ao obter curtidas do usuário:`, error);
      throw error;
    }
  };
  
  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signUp,
        logOut,
        getAllInitiatives,
        getUser,
        updateUser,
        createInitiative,
        getOneInitiative,
        createLike,
        deleteLike,
        getUserLikes,
        authenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
