import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useLoggedInUserDetails } from '../api/queries/login.queries';
import { IUser } from '../types';

export default function useUserDetails() {
  const loggedInUserDetails = useLoggedInUserDetails();
  const [token, setToken] = useState<string | undefined>('');
  const [userDetails, setUserDetails] = useState<IUser | undefined>();

  useEffect(() => {
    const tokenFromCookies = Cookies.get('token');
    setToken(tokenFromCookies);
  });

  useEffect(() => {
    if (token) {
      loggedInUserDetails.mutate(
        {},
        {
          onSuccess: res => {
            setUserDetails(res.staff);
          },
        },
      );
    }
  }, [token]);

  return userDetails;
}
