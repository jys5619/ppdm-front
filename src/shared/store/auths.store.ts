import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  isLoggedIn: boolean;
  token: string;
};

type Actions = {
  login: (token: string) => void;
  logout: () => void;
};

type Store = State & Actions;

const initialState: State = {
  isLoggedIn: false,
  token: "",
};

export const useAuths = create(
  persist<Store>(
    set => ({
      ...initialState,
      login: (token: string) => {
        set(() => ({ isLoggedIn: true, token: token }));
      },
      logout: () => {
        set(() => ({ ...initialState }));
      },
    }),
    {
      name: "auths",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
