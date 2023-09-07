import { User } from "./User";

export type AuthContextType = {
    user: User | null;
    signIn: (email: string, password: string) => Promise<void>;
    signUp: (email:string, password: string, name:string) => Promise<void>
    signOut: () => void;
    isAuthenticated: boolean;
  };
