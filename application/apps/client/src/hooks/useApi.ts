import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const useApi = () => ({

  signIn: async (email: string, password: string) => {
    try {
      const response = await api.post("/api/auth/sign-in", {
        email,
        password,
      });

      console.log(response.headers)
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

  logOut: async () => {
    try {
      const response = await api.post("/api/auth/logout");
      if (response.status === 200){

      }
      else {
        console.error("Logout falhou: status de resposta não é 200");
      }
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  },

  getAllInitiatives: async () => {
    try {
      const response = await api.get(`/api/initiative`);

      return response;
    } catch (error) {
      console.error("Erro ao obter iniciativas:", error);
      throw error;
    }
  },
  

  updateUser: async (description:string) => {
    try {
      const response = await api.put(`/api/user/update`, {
        description
      });

      return response;
    } catch (error) {
      console.error("Erro ao atualizar:", error);
      throw error;
    }
  },

  getUser: async (id: number) => {
    try {
      const response = await api.get(`api/user/?userId=${Number(id)}`);

      return response.data;
    } catch (error) {
      console.error("Erro ao obter usuário:", error);
      throw error;
    }
  },

  createInitiative: async (
    name: string,
    description: string,
    bairro: string,
    icon: string | null,
    images: string | null,
    socials: string | null,
  ) => {
    try {
      const response = await api.post(
        `/api/initiative`,
        { name, description, bairro, icon, images, socials },
    
      );

      return response;
    } catch (error) {
      console.error("Erro ao criar iniciativa:", error);
      throw error;
    }
  },

 

});