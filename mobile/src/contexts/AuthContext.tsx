import { createContext, ReactNode, useEffect, useState } from "react";
import { UserDTO } from "@dtos/UserDTO";

import {
  storageAuthTokenSave,
  storageAuthTokenGet,
} from "@storage/storageAuthToken";
import {
  storageUserSave,
  storageUserGet,
  storageUserRemove,
} from "@storage/storageUser";

import { api } from "@services/api";

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isLoadingUserStorageData: boolean;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO);
  const [isLoadingUserStorageData, setIsLoadingUserStorageData] =
    useState(true);

  async function UserAndTokenUpdate(userData: UserDTO, token: string) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setUser(userData);
  }

  async function StorageUserAndTokenSave(userData: UserDTO, token: string) {
    try {
      setIsLoadingUserStorageData(true);

      await storageUserSave(userData);
      await storageAuthTokenSave(token);
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function signIn(email: string, password: string) {
    try {
      const { data } = await api.post("/sessions", { email, password });
      if (data.user && data.token) {
        await StorageUserAndTokenSave(data.user, data.token);
        UserAndTokenUpdate(data.user, data.token);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function signOut() {
    try {
      setIsLoadingUserStorageData(true);
      setUser({} as UserDTO);
      await storageUserRemove();
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  useEffect(() => {
    loaderUserData();
  }, []);

  async function loaderUserData() {
    try {
      setIsLoadingUserStorageData(true);

      const userLogged = await storageUserGet();
      const token = await storageAuthTokenGet();

      if (token && userLogged) {
        UserAndTokenUpdate(userLogged, token);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, signIn, signOut, isLoadingUserStorageData }}
    >
      {children}
    </AuthContext.Provider>
  );
}
