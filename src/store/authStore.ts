import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface User {
  token: string | null;
  email: string | null;
}

interface AuthState {
  user: User;
  login: (token: string, email: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: {
        token: null,
        email: null,
      },
      login: (token, email) => set({ user: { token, email } }),
      logout: () => {
        set({ user: { token: null, email: null } });
        localStorage.removeItem("auth-storage");
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
