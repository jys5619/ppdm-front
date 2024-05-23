import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  userInfo: UserInfoVo;
};

type Actions = {
  setUserInfo: (user: UserInfoVo) => void;
  reset: () => void;
};

type Store = State & Actions;

const initialState: State = {
  userInfo: {},
};

/**
 * Request요청 올때 기본으로 셋팅되는 값
 */
export interface UserInfoVo {
  id?: string;
  name?: string;
  email?: string;
  roles?: string[];
}

export const useUserInfo = create(
  persist<Store>(
    set => ({
      ...initialState,
      setUserInfo: (userInfo: UserInfoVo) => {
        set(() => ({ userInfo }));
      },
      reset: () => {
        set(initialState);
      },
    }),
    {
      name: "user-info",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
