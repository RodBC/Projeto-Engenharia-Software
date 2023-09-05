import React, { createContext, useContext, useState } from "react";
import { api } from "./services/api";
import { setCookie } from "nookies";


type User = {
  token: string;
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

      const { access_token } = response.data;
      setUser({ token: access_token });
      setCookie(undefined, 'reactauth.token', access_token, {
        maxAge: 60 * 60 * 1 // 1 hour
      })

    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  };


  const signOut = () => {
    // Implemente a função de logout aqui, incluindo a remoção de cookies ou local storage
    setUser(null);
  };


  const isAuthenticated = user !== null;

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};



