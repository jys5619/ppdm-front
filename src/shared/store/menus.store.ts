import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface MenuItem {
  group: string;
  id: string;
  url: string;
  name: string;
  children?: string;
}

type State = {
  menus: MenuItem[];
};

type Actions = {
  setMenus: (menus: MenuItem[]) => void;
  resetMenus: () => void;
};

type Store = State & Actions;

const initialState: State = {
  menus: [],
};

export const useMenus = create(
  persist<Store>(
    set => ({
      ...initialState,
      setMenus: (menus: MenuItem[]) => {
        set(() => ({ menus }));
      },
      resetMenus: () => {
        set(() => ({ ...initialState }));
      },
    }),
    {
      name: "menus",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

/*
 */
