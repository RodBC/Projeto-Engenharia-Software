import { User } from "./User";

export type AuthContextType = {
    user: User | null | undefined;
    signIn: (email: string, password: string) => Promise<void>;
    signUp: (email:string, password: string, name:string) => Promise<void>
    updateUser: (description:string) => Promise<void>
    createInitiative: (name:string, description:string, bairro:string, icon: string | null, images:string | null, socials:string | null) => Promise<void>
    getUser: (Id:number) => Promise<void>
    getAllInitiatives: () => Promise<any>
    isAuthenticated: () => boolean;
    logOut: () => Promise<void>;
    checkAuth: () => Promise<void>;
  };
