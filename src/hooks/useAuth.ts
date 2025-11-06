import { http } from '@/lib/https';
import { endpoints } from '@/config/endpoints';
import type { AuthResponse, LoginDto, SignupDto } from '@/types/auth';

export const AuthService = {
  async login(body: LoginDto): Promise<AuthResponse> {
    // your backend returns accessToken + user
    return http.post(endpoints.auth.login, body);
  },

  async signup(body: SignupDto): Promise<{ ok: true; message: string }> {
    return http.post(endpoints.auth.signup, body);
  },

  async me(): Promise<AuthResponse['user']> {
    return http.get('/auth/me'); // implement this route in backend later
  },

  async logout(): Promise<{ ok: true }> {
    return http.post('/auth/logout', {}); // or just resolve({ok:true}) if no endpoint
  },

  googleUrl(): string {
    return endpoints.auth.google;
  },
};
