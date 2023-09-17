import { AuthContext } from "./AuthContext";
import { User } from "../../types/User";
import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const Api = useApi();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const userFromLocalStorage = JSON.parse(storedUser);
      setUser(userFromLocalStorage);
    }
  }, []);

  const isAuthenticated = () => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      return true;
    } else {
      return false;
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const response = await Api.signIn(email, password);

      const userResponse = {
        id: response.data.id,
        name: response.data.name,
        description: response.data.description,
        imgUrl: response.data.imgUrl,
        bannerUrl: response.data.bannerUrl,
      };
      setUser(userResponse);
      localStorage.setItem("user", JSON.stringify(userResponse));

     
    } catch (error) {
      console.error("Erro ao fazer login:", error);

      throw error;
    }
  };

  const signUp = async (email: string, password: string, name: string) => {
    try {
      const response = await Api.signUp(email, password, name);

      console.log(response.id, response.name);

    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      throw error;
    }
  };

  const logOut = async () => {
    try {
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

      setUser({
        id: response.id,
        name: response.name,
        description: response.description,
        imgUrl: response.imgUrl,
        bannerUrl: response.bannerUrl,
      });
    } catch (error) {
      console.error("Erro ao obter usuário", error);
      throw error;
    }
  };





  const updateUser = async (description:string) => {

    try {
      const jwtCookie = document.cookie.includes('jwt');
      console.log(jwtCookie)
      const response = await Api.updateUser(description);

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
    } catch (error) {
      console.error("Erro ao chamar a api de criação:", error);
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
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
