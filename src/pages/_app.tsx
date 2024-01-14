import '../styles/globals.scss';
import Head from 'next/head';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { CookiesProvider } from 'react-cookie';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { useLocalStorage, useHotkeys } from '@mantine/hooks';
import { NotificationsProvider } from '@mantine/notifications';
import React from 'react';
import GA_CONST from '../data/GA_CONST';
import { AppPropsWithLayout } from '../types';
import { UserProvider } from '../context/UserContext';
import Providers from '../redux/provider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const THEME_KEY = GA_CONST.themeKey;

const Participleplus = ({ Component, pageProps }: AppPropsWithLayout) => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: THEME_KEY,
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const getLayout = Component.getLayout || (page => page);

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#050505" />
        <meta name="msapplication-TileColor" content="#050505" />
        <meta name="theme-color" content="#050505" />
      </Head>
      <Providers>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <CookiesProvider>
              <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <MantineProvider
                  withGlobalStyles
                  withNormalizeCSS
                  theme={{
                    colorScheme,
                    fontFamily: 'Manrope',
                    colors: {
                      dark: ['#050505', '#050505'],
                    },
                  }}
                >
                  <NotificationsProvider>
                    <UserProvider>{getLayout(<Component {...pageProps} />)}</UserProvider>
                  </NotificationsProvider>
                </MantineProvider>
              </ColorSchemeProvider>
            </CookiesProvider>
          </Hydrate>
        </QueryClientProvider>
      </Providers>
    </>
  );
};

export default Participleplus;
