import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useLoggedInUserDetails } from '../api/queries/login.queries';
import { IUser } from '../types';

type IContext = {
  user: IUser | undefined;
};

const UserContext = React.createContext<IContext>({
  user: undefined,
});

export const useUserContext = () => React.useContext(UserContext);

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const loggedInUserDetails = useLoggedInUserDetails();
  const [token, setToken] = useState<string | undefined>();
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

  const context = React.useMemo(
    () => ({
      user: userDetails,
    }),
    [userDetails],
  );
  return <UserContext.Provider value={context}>{children}</UserContext.Provider>;
};
