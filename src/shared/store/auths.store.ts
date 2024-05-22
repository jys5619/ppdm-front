import { create } from "zustand";

type State = {
  token: string;
};

type Actions = {
  setToken: (token: string) => void;
  reset: () => void;
};

const initialState: State = {
  token: "",
};

export const useAuths = create<State & Actions>()(set => ({
  ...initialState,
  setToken: (token: string) => {
    set({ token: token });
  },
  reset: () => {
    set(initialState);
  },
}));
