import getEnvironmentName from './environment';
import CONST_VALUE from '../data/constants';

export const getGAIdFromEnv = (environmentName: string): string => {
  let code: string = '';
  switch (environmentName) {
    case CONST_VALUE.environment.local:
      code = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID_LOCAL!;
      break;
    case CONST_VALUE.environment.production:
      code = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID_PROD!;
      break;
    default:
      break;
  }
  return code;
};

type GAPageView = {
  title: string;
  url: URL;
};

export const sendGAPageView = ({ title, url }: GAPageView) => {
  window.gtag('config', getGAIdFromEnv(getEnvironmentName()), {
    page_title: title,
    page_path: url.pathname,
  });
};

type GATagUserDimension = {
  user_type: string;
  user_id: string;
};

export const sendGAUserDimension = ({ user_type, user_id }: GATagUserDimension) => {
  window.gtag('config', getGAIdFromEnv(getEnvironmentName()), {
    custom_map: {
      dimension1: 'User Type',
      dimension2: 'User ID',
    },
  });
  window.gtag('event', 'user_dimension', {
    User_Type: user_type,
    User_ID: user_id,
  });
};

type GTagEvent = {
  action: string;
  category: string;
  label: string;
};

export const sendGAEvent = ({ action, category, label }: GTagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
  });
};
