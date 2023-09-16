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

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        logOut,
        getAllInitiatives,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
