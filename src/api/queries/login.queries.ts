import { useMutation } from 'react-query';
import Cookies from 'js-cookie';
import { IMerchantStaff, IUser } from '../../types';
import { ApiResponseError } from '../http';
import { login, loggedInUserDetails } from '../requests/login.requests';
import { MERCHANT_STAFF_ROLES } from '../../types/enums';
import useCustomNotification from '../../hooks/useCustomNotification';

export const useLogin = () =>
  useMutation<
    { staff: IMerchantStaff; token: string },
    ApiResponseError,
    { email: string; password: string }
  >(
    async ({ email, password }: { email: string; password: string }) => {
      const res = await login(email, password);
      return res.data;
    },
    {
      onSuccess: res => {
        Cookies.set('token', res.token, {
          path: '/',
          sameSite: 'strict',
          expires: 30, // Valid for 30 days
        });
        if (res.staff.merchant && res.staff.role === MERCHANT_STAFF_ROLES.OWNER) {
          Cookies.set('merchant', res.staff.merchant, {
            path: '/',
            sameSite: 'strict',
            expires: 30, // Valid for 30 days
          });
        } else if (res.staff.merchantStore && res.staff.role === MERCHANT_STAFF_ROLES.MANAGER) {
          Cookies.set('active-store-location', res.staff.merchantStore, {
            path: '/',
            sameSite: 'strict',
            expires: 30, // Valid for 30 days
          });
        } else if (res.staff.merchantStore && res.staff.role === MERCHANT_STAFF_ROLES.STAFF) {
          Cookies.set('active-store-location', res.staff.merchantStore, {
            path: '/billing',
            sameSite: 'strict',
            expires: 30, // Valid for 30 days
          });
        }
        Cookies.set('first-name', res.staff.firstName, {
          path: '/',
          sameSite: 'strict',
          expires: 30, // Valid for 30 days
        });
        const customNotification = useCustomNotification({
          id: 'login-success',
          message: `Logged in as ${res.staff.role?.toLocaleLowerCase()} successfully!`,
          color: 'green',
        });
        customNotification.show();
      },
      onError: () => {
        const customNotification = useCustomNotification({
          id: 'login-failed',
          message: 'Login Failed',
          color: 'ref',
        });
        customNotification.show();
      },
    },
  );

export const useLoggedInUserDetails = () =>
  useMutation<{ staff: IUser }, ApiResponseError, {}>(
    async () => {
      const res = await loggedInUserDetails();
      return res.data;
    },
    {
      onSuccess: res => {
        Cookies.set('first-name', res.staff.firstName, {
          path: '/',
          sameSite: 'strict',
          expires: 30, // Valid for 30 days
        });
      },
    },
  );
