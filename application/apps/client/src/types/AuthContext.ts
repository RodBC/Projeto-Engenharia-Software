import { User } from "./User";
import { InitiativeInfo } from "./Initiative";

export type AuthContextType = {
    user: User | null | undefined;
    signIn: (email: string, password: string) => Promise<void>;
    signUp: (email:string, password: string, name:string) => Promise<void>
    updateUser: (imgUrl:string, bannerURL:string, description:string) => Promise<void>
    createInitiative: (name:string, description:string, bairro:string, icon: string | null, images:string | null, socials:string | null) => Promise<InitiativeInfo>;
    getUser: (Id:number) => Promise<void>
    getAllInitiatives: () => Promise<any>
    getOneInitiative: (id:number) => Promise<any>
    createLike: (id:number) => Promise<any>
    deleteLike: (id:number) => Promise<any>
    getUserLikes: () => Promise<any>
    getAllLikes: () => Promise<any>
    authenticated: boolean;
    logOut: () => Promise<void>;
  };
