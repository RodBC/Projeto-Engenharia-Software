// api.ts
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000", // Coloque a URL correta do seu backend
});

export const useApi = () => ({
  validateToken: async (token: string, id: string) => {
    try {
      const response = await api.get(`api/user/?userId=${Number(id)}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error("Erro ao validar token:", error);
      throw error;
    }
  },

  signIn: async (email: string, password: string) => {
    try {
      const response = await api.post("/api/auth/sign-in", {
        email,
        password,
      });

      return response;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  },

  signUp: async (email: string, password: string, name: string) => {
    try {
      const response = await api.post("/api/auth/sign-up", {
        email,
        password,
        name,
      });

      return response.data;
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      throw error;
    }
  },

  updateUser: async (userId: number, description: string, token: string) => {
    try {
      const response = await api.put(
        `/api/user/update/?userId=${userId}`,
        { description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response;
    } catch (error) {
      console.error("Erro ao atualizar:", error);
      throw error;
    }
  },

  getUser: async (id: number, token: string) => {
    try {
      const response = await api.get(`api/user/?userId=${Number(id)}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error("Erro ao obter usuário:", error);
      throw error;
    }
  },

  createInitiative: async (
    name: string,
    description: string,
    images: string | null,
    socials: string | null,
    token: string
  ) => {
    try {
      const response = await api.post(
        `/api/initiative`,
        { name, description, images, socials },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response;
    } catch (error) {
      console.error("Erro ao criar iniciativa:", error);
      throw error;
    }
  },

  getAllInitiatives: async (token:string) => {
    try {
      const response = await api.get(`/api/initiative`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response;
    } catch (error) {
      console.error("Erro ao obter iniciativas:", error);
      throw error;
    }
  },

});
