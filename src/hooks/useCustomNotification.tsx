import { showNotification } from '@mantine/notifications';
import Image from 'next/image';
import success from '../assets/success.svg';
import failed from '../assets/failed.svg';

type CustomNotificationProps = {
  id?: string;
  title?: string;
  message: string;
  color: string;
};

const NotificationIcon = ({ color }: { color: string }) => {
  switch (color) {
    case 'green':
      return <Image src={success} alt="enter" width={30} height={30} />;
    case 'red':
      return <Image src={failed} alt="failed" width={30} height={30} />;
    default:
      return <Image src={failed} alt="failed" width={30} height={30} />;
  }
};

const useCustomNotification = ({ id, title, message, color }: CustomNotificationProps) => ({
  show: () => {
    showNotification({
      id,
      autoClose: 3000,
      title,
      message,
      color,
      styles: () => ({
        root: {
          backgroundColor: 'var(--black)',
          border: 'none',
          borderRadius: '12px',
        },
        title: { color: 'var(--light)' },
        description: {
          color: 'var(--light)',
          fontSize: '16px',
          fontWeight: 600,
        },
        closeButton: {
          color: 'var(--light)',
        },
      }),
      icon: <NotificationIcon color={color} />,
    });
  },
});

export default useCustomNotification;
