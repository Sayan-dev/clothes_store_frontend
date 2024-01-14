import React from 'react';
import { createStyles, Modal, Box, Text } from '@mantine/core';

type IOptions = {
  message: string;
  confirmText?: string;
  cancelText?: string;
  hideCancel?: boolean;
};

type IContext = {
  show: (message: string, options?: Omit<IOptions, 'message'>) => Promise<boolean>;
};

const ConfirmationContext = React.createContext<IContext>({
  show: () => Promise.resolve(false),
});

export const useConfirmationContext = () => React.useContext(ConfirmationContext);

type IConfirmationModalProps = {
  children: React.ReactNode;
};

export const ConfirmationProvider: React.FC<IConfirmationModalProps> = ({ children }) => {
  const awaitingPromiseRef = React.useRef<{
    resolve: (value: boolean | PromiseLike<boolean>) => void;
    reject: (reason?: any) => void;
  }>();

  const [options, setOptions] = React.useState<IOptions | undefined>();
  const [isVisible, setIsVisible] = React.useState(false);

  const openConfirmation = React.useCallback(
    (message: string, newOptions?: Omit<IOptions, 'message'>) => {
      setOptions({
        message,
        ...newOptions,
      });

      setIsVisible(true);

      return new Promise<boolean>((resolve, reject) => {
        awaitingPromiseRef.current = { resolve, reject };
      });
    },
    [],
  );

  const handleClose = () => {
    if (awaitingPromiseRef.current) {
      awaitingPromiseRef.current.reject(false);
    }

    setIsVisible(false);
    setOptions(undefined);
  };

  const handleSubmit = () => {
    if (awaitingPromiseRef.current) {
      awaitingPromiseRef.current.resolve(true);
    }

    setIsVisible(false);
  };

  const context = React.useMemo(
    () => ({
      show: openConfirmation,
    }),
    [openConfirmation],
  );

  return (
    <ConfirmationContext.Provider value={context}>
      {children}

      <Modal
        opened={isVisible}
        size={475}
        closeOnClickOutside={false}
        closeOnEscape={false}
        overlayColor="var(--transparent)"
        overlayBlur={2}
        withCloseButton={false}
        onClose={handleClose}
        transitionDuration={0}
        styles={{
          modal: {
            backgroundColor: 'var(--background-dark)',
            border: 'none',
            borderRadius: '25px',
            padding: '20px !important',
            margin: 'auto',
          },
        }}
      >
        <Box className="relative flex flex-col gap-[50px]">
          <Text className="text-white p-10 text-[30px] font-semibold text-center">
            {options?.message}
          </Text>
          <Box className="flex gap-[20px] w-full">
            <Box
              onClick={handleSubmit}
              className="rounded-[10px] bg-green hover:bg-green w-full focus:outline-none py-[10px] cursor-pointer flex justify-center items-center"
            >
              <Text className="text-xl font-medium text-dark">
                {options?.confirmText ?? options?.confirmText}
              </Text>
            </Box>

            {!options?.hideCancel && (
              <Box
                onClick={handleClose}
                className="rounded-[10px] bg-dark-grey hover:bg-dark-grey w-full focus:outline-none py-[10px] cursor-pointer flex justify-center items-center"
              >
                <Text className="text-xl font-medium text-light">
                  {options?.cancelText ?? options?.cancelText}
                </Text>
              </Box>
            )}
          </Box>
          {/* <Box className={classes.deleteButtons}>
            <Button
              className="h-full bg-transparent hover:bg-transparent p-0"
              onClick={handleClose}
            >
              <Image
                src={deleteButton}
                width={50}
                height={50}
                alt="Delete"
                className="overflow-visible"
              />
            </Button>
          </Box> */}
        </Box>
      </Modal>
    </ConfirmationContext.Provider>
  );
};
