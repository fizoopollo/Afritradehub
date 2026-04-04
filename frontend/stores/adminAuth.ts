import { create } from 'zustand';

interface AdminAuthStore {
  isAuthenticated: boolean;
  adminUser: any | null;
  setAuthenticated: (authenticated: boolean) => void;
  setAdminUser: (user: any) => void;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

export const useAdminAuth = create<AdminAuthStore>((set) => ({
  isAuthenticated: false,
  adminUser: null,
  setAuthenticated: (authenticated: boolean) => set({ isAuthenticated: authenticated }),
  setAdminUser: (user: any) => set({ adminUser: user }),
  login: (email: string, password: string) => {
    // TODO: Implement actual authentication
    set({ isAuthenticated: true, adminUser: { email } });
    return true;
  },
  logout: () => set({ isAuthenticated: false, adminUser: null }),
}));
