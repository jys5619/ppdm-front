import { create } from "zustand";
import { UserInfoVo } from "./user-info.vo";

type State = {
  userInfo: UserInfoVo;
};

type Actions = {
  setUserInfo: (user: UserInfoVo) => void;
  reset: () => void;
};

const initialState: State = {
  userInfo: {},
};

export const useUserInfo = create<State & Actions>()(set => ({
  ...initialState,
  setUserInfo: (userInfo: UserInfoVo) => {
    set({ userInfo });
  },
  reset: () => {
    set(initialState);
  },
}));
