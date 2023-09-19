import axios from "axios";

axios.defaults.withCredentials = true;

export const api = axios.create({
  baseURL: "https://helpcifeapi.onrender.com/api",
});

export const useApi = () => ({

  signIn: async (email: string, password: string) => {
    try {
      const response = await api.post("/auth/sign-in", {
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
      const response = await api.post("/auth/sign-up", {
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
      const response = await api.post("/auth/logout");
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
      const response = await api.get(`/initiative`);

      return response;
    } catch (error) {
      console.error("Erro ao obter iniciativas:", error);
      throw error;
    }
  },
  

  updateUser: async (imgUrl:string, bannerUrl:string, description:string) => {
    try {
      const response = await api.put(`/user/update`, {
        imgUrl,
        bannerUrl,
        description,
      });

      return response;
    } catch (error) {
      console.error("Erro ao atualizar:", error);
      throw error;
    }
  },

  getUser: async (id:number) => {
    try {
      const response = await api.get(`/user/?userId=${id}`);
      console.log(response.data.id)
      return response;
    } catch (error) {
      console.error("Erro ao obter usuário:", error);
      throw error;
    }
  },


  createInitiative: async (
    name: string,
    description: string,
    neighborhood: string,
    icon: string | null,
    images: string | null,
    socials: string | null,
  ) => {
    try {
      const response = await api.post(`/initiative`,
      { name, description, neighborhood, icon, images, socials },);

      return response;
    } catch (error) {
      console.error("Erro ao criar iniciativa:", error);
      throw error;
    }
  },

  getOneInitiative: async (id:number) => {
    try {
      const response = await api.get(`/initiative/${id}`);

      return response;
    } catch (error) {
      console.error(`Erro ao obter a iniciativa:`, error);
      throw error;
    }
  },

  createLike: async (id:number) => {
    try {
      const response = await api.post(`/likes/${id}`);

      return response;
    } catch (error) {
      console.error(`Erro ao criar curtida:`, error);
      throw error;
    }
  },

  deleteLike: async (id:number) => {
    try {
      const response = await api.delete(`/likes/${id}`);

      return response;
    } catch (error) {
      console.error(`Erro ao criar curtida:`, error);
      throw error;
    }
  },

  getUserLikes: async () => {
    try {
      const response = await api.get(`/likes/user`);

      return response;
    } catch (error) {
      console.error(`Erro ao obter curtidas do usuário:`, error);
      throw error;
    }
  },

  getAllLikes: async () => {
    try {
      const response = await api.get(`/likes`);

      return response;
    } catch (error) {
      console.error(`Erro ao obter curtidas das iniciativas:`, error);
      throw error;
    }
  }

  

});