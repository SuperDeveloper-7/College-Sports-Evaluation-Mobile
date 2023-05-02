import React from 'react';
import { P, Label } from 'components';
import { Box, Text, ITextProps, Center, Pressable, Stack } from 'native-base';
import { BlueJewelIcon } from 'assets';

type Props = ITextProps & {
  value?: string;
  money?: string;
  onPress?: () => void;
};

export const BlueProduction = ({ value, onPress, money }: Props) => {
  return (
    <Pressable width="1/3">
      <Stack alignItems="center">
        <Stack
          justifyContent="center"
          alignItems="center"
          bg="#151A23"
          position="relative">
          <P color="white" fontWeight="bold" sz="small">
            {value}
          </P>
        </Stack>
        <Box py={1}>
          <BlueJewelIcon />
        </Box>
        <Box
          flex={1}
          width="100%"
          justifyContent="center"
          alignItems="center"
          bg="rgba(33, 39, 53, 0.75)">
          <P color="white" fontWeight="bold" sz="small">
            ${money}
          </P>
        </Box>
      </Stack>
    </Pressable>
  );
};
