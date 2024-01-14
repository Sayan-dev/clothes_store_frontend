import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import cookie from 'cookie';
import type { IncomingMessage } from 'http';
import type { NextApiRequestCookies } from 'next/dist/server/api-utils';
import { verifyUser } from '../api/requests/login.requests';
import { IUser } from '../types';
import itemData from '../data/itemdata';

type Request = IncomingMessage & {
  cookies: NextApiRequestCookies;
};

export default function parseCookies(req: Request) {
  return cookie.parse(req ? req.headers.cookie || '' : document.cookie);
}

export function withAuth<P extends { [key: string]: unknown } = { [key: string]: unknown }>(
  handler: (
    context: GetServerSidePropsContext & { req: { user?: IUser } },
  ) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>,
) {
  return async function checkJwtToken(
    context: GetServerSidePropsContext & { req: { user?: IUser } },
  ) {
    const cookies = parseCookies(context.req);

    // const isStaffAccessibleLink = (path: string) => {
    //   const basePath = '/_next/data/development/dashboard.json';
    //   const { url } = context.req;
    //   if (path === '') return url === basePath;
    //   return url?.includes(path);
    // };

    const destination = '/';

    if (!cookies.token) {
      return {
        redirect: {
          permanent: true,
          destination,
        },
        props: {},
      };
    }

    try {
      const result = await verifyUser(cookies.token);

      context.req.user = result.data.staff;

      // if (result.data.staff.role === MERCHANT_STAFF_ROLES.STAFF) {
      //   console.log(
      //     Object(CONST_VALUE.staffBlockedPaths).values.find((path: string) =>
      //       isStaffAccessibleLink(path),
      //     ),
      //   );
      //   if (
      //     Object(CONST_VALUE.staffBlockedPaths).values.find((path: string) =>
      //       isStaffAccessibleLink(path),
      //     )
      //   )
      //     return {
      //       redirect: {
      //         permanent: true,
      //         destination,
      //       },
      //       props: {},
      //     };
      // }

      return handler({ ...context });
    } catch (error) {
      return {
        redirect: {
          permanent: true,
          destination,
        },
        props: {},
      };
    }
  };
}

export const getItemData = (itemId: string) => itemData[itemId];

export const convertToPercentage = (data: number) => data * 100;
