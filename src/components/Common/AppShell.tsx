import React, { useState } from 'react';
import { AppShell, Box, Paper, useMantineTheme } from '@mantine/core';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import CONST_VALUE from '../../data/constants';
import { useConfirmationContext } from '../../context/ConfirmationContext';
import LandingLayoutHeader from '../Landing/LandingLayoutHeader';
import Footer from './Footer';
import HomeNotification from './HomeNotification';

type AppWrapperProps = {
  children: React.ReactNode;
};

const AppWrapper = ({ children }: AppWrapperProps) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const router = useRouter();
  const { show } = useConfirmationContext();
  const setNavigationOpen = (status: boolean) => setOpened(status);

  const logout = () => {
    Cookies.remove('token');
    router.push('/');
  };

  const handleLogout = async () => {
    try {
      const result = await show('Are you sure you want to log out?', {
        confirmText: 'Confirm',
        cancelText: 'Cancel',
        hideCancel: false,
      });
      if (result ?? result === true) {
        await logout();
      }
    } catch {
      // do nothing
    }
  };

  return (
    <Box>
      <HomeNotification />
      <Box className="max-w-[1020px] m-auto">
        <AppShell
          styles={{
            main: {
              padding: 0,
              width: '100%',
            },
          }}
          fixed
          // navbar={<SideNavbar handleLogout={handleLogout} opened={opened} />}
          header={<LandingLayoutHeader handleLogout={handleLogout} setOpened={setNavigationOpen} />}
        >
          {children}
        </AppShell>
      </Box>
      <Footer />
    </Box>
  );
};

export default AppWrapper;
