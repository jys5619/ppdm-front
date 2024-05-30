import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface MenuItem {
  id: string;
  url: string;
  name: string;
  parentId: string;
}

export interface MenuGroup {
  [key: string]: MenuItem[];
}

type State = {
  menus: MenuGroup;
};

type Actions = {
  setMenus: (menus: MenuGroup) => void;
  resetMenus: () => void;
};

type Store = State & Actions;

const initialState: State = {
  menus: {},
};

export const useMenus = create(
  persist<Store>(
    set => ({
      ...initialState,
      setMenus: (menus: MenuGroup) => {
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
