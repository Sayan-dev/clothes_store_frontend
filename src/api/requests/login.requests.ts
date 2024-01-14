import { ApiResponse, IMerchantStaff, IUser } from '../../types';
import http from '../http';

export const login = (email: string, password: string) =>
  http.post<ApiResponse<{ staff: IMerchantStaff; token: string }>>('/api/merchant-staff/login', {
    email,
    password,
  });

export const loggedInUserDetails = () =>
  http.get<ApiResponse<{ staff: IUser }>>('/api/auth/merchants/me');

export const verifyUser = (token?: string) =>
  http.get<ApiResponse<{ staff: IUser }>>('/api/auth/merchants/me', {
    headers: new Headers({
      'Authorization': `Bearer ${token}`,
    }),
  });
