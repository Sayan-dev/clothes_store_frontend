import { Box, Chip, clsx } from '@mantine/core';
import React from 'react';
import { useAppDispatch } from '../../../../redux/hooks';
import { selectSize } from '../../../../redux/features/itemSlice';

interface Props {
  size: string[];
  selected_size: string;
  className: string;
}

const Size = ({ size, selected_size, className }: Props) => {
  const dispatch = useAppDispatch();

  const handleSetValue = (val: string) => {
    dispatch(selectSize(val));
  };
  return (
    <Box className={clsx(className, '')}>
      <p className="mb-2">Size:</p>
      <Chip.Group multiple={false} value={selected_size} onChange={handleSetValue}>
        {size.map(e => (
          <Chip variant="filled" radius="xs" value={e}>
            {e}
          </Chip>
        ))}
      </Chip.Group>
    </Box>
  );
};

export default Size;
