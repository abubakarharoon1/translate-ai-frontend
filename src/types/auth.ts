export type User = {
  id: string;
  email: string;
  username: string;
  role?: 'user' | 'admin' | 'superadmin';
  emailVerified?: boolean;
};

export type LoginDto = { email: string; password: string };
export type SignupDto = { username: string; email: string; password: string };

export type AuthResponse = {
  accessToken: string;
  user: User;
};
