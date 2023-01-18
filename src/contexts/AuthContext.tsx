import { createContext, ReactNode, useState } from "react";
import { UserDTO } from "@dtos/UserDTO";

export type AuthContextDataProps = {
  user: UserDTO;
  SignIn: (email: string, password: string) => void;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState({
    id: "1",
    name: "Almir Santos",
    email: "almirwebdev@gmail.com",
    avatar: "almir.png",
  });

  function SignIn(email: string, password: string) {
    setUser({
      name: "",
      email,
      id: "",
      avatar: "",
    });
  }

  return (
    <AuthContext.Provider value={{ user, SignIn }}>
      {children}
    </AuthContext.Provider>
  );
}
