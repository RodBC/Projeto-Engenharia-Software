import { AuthContext } from "./AuthContext";
import { User } from "../../types/User";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import jwtDecode from "jwt-decode";

interface DecodedToken {
  sub: number;
  exp: number;
  iat: number;
  email: string;
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const Api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      const cookies = parseCookies();
      const id = cookies["reactauth.user_id"];
      const token = cookies["reactauth.token"];

      if (token && id) {
        const response = await Api.validateToken(token, id);
        setUser({ id: response.id, name: response.name, description: "", imgUrl: "" });
      }
    };
    validateToken();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const response = await Api.signIn(email, password);

      const access_token = response.data.access_token;

      const decodedToken = jwtDecode<DecodedToken>(access_token);

      setCookie(undefined, "reactauth.token", access_token, {
        maxAge: 60 * 60 * 1, // 1 hour
      });
      setCookie(undefined, "reactauth.user_id", decodedToken.sub.toString(), {
        maxAge: 60 * 60 * 1, // 1 hour
      });
      setUser({ id: decodedToken.sub, name: "", description: "", imgUrl: ""});
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  };

  const signUp = async (email: string, password: string, name: string) => {
    try {
      const response = await Api.signUp(email, password, name);

      console.log(response.id, response.name);

      setUser({ id: response.id, name: response.name, description: "", imgUrl: ""});
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      throw error;
    }
  };

  const signOut = () => {
    destroyCookie(null, "reactauth.user_id", { path: "/" });
    destroyCookie(null, "reactauth.token", { path: "/" });
    setUser(null);
    window.location.reload();
  };

  const updateUser = async (id: number, imgUrl: string, description:string, bannerUrl:string) => {
    const cookies = parseCookies();
    const token = cookies["reactauth.token"];

    try {
      const response = await Api.updateUser(id, imgUrl, description, bannerUrl, token);

      setUser({
        id: response.data.id,
        name: response.data.name,
        description: response.data.description,
        imgUrl: response.data.imgUrl,
        bannerUrl: response.data.bannerUrl
      });
    } catch (error) {
      console.error("Erro ao atualizar usuário", error);
      throw error;
    }
  };

  const getUser = async (Id: number) => {
    const cookies = parseCookies();
    const token = cookies["reactauth.token"];

    try {
      const response = await Api.getUser(Id, token);

      setUser({
        id: response.id,
        name: response.name,
        description: response.description,
        imgUrl: response.imgUrl,
        bannerUrl: response.bannerUrl
      });
    } catch (error) {
      console.error("Erro ao obter usuário", error);
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
    const cookies = parseCookies();
    const token = cookies["reactauth.token"];

    try {
      const response = await Api.createInitiative(
        name,
        description,
        bairro,
        icon,
        images,
        socials,
        token
      );
    } catch (error) {
      console.error("Erro ao chamar a api de criação:", error);
      throw error;
    }
  };

  const getAllInitiatives = async () => {
    const cookies = parseCookies();
    const token = cookies["reactauth.token"];

    try {
      const response = await Api.getAllInitiatives(token)
      return response.data
    } catch (error) {
      console.error("Erro ao utilizar a api de obter iniciativas", error);
      throw error;
    }
  };

  const isAuthenticated = user !== null;

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        signUp,
        updateUser,
        getUser,
        createInitiative,
        getAllInitiatives,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
