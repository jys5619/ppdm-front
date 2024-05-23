import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ThemeType = "dark" | "light";

type State = {
  theme: ThemeType;
  userEmail: string;
};

type Actions = {
  setTheme: (theme: ThemeType) => void;
  setUserEmail: (email: string) => void;
  reset: () => void;
};

type Store = State & Actions;

const initialState: State = {
  theme: "dark",
  userEmail: "",
};

export const useAppSetting = create(
  persist<Store>(
    set => ({
      ...initialState,
      setTheme: (theme: ThemeType) => {
        set(() => ({ theme: theme }));
      },
      setUserEmail: (email: string) => {
        set(() => ({ userEmail: email }));
      },
      reset: () => {
        set(initialState);
      },
    }),
    {
      name: "app-setting",
    }
  )
);
