import React from 'react';
import { P, Label } from 'components';
import { Box, ITextProps, Pressable, Stack } from 'native-base';
import { YellowJewelIcon } from 'assets';

type Props = ITextProps & {
  value?: string;
  money?: string;
  onPress?: () => void;
};

export const YellowProduction = ({ value, onPress, money }: Props) => {
  return (
    <Pressable width="1/3">
      <Stack alignItems="center">
        <Stack
          justifyContent="center"
          alignItems="center"
          bg="#151A23"
          position="relative">
          <Label color="white" fontWeight="bold" sz="small">
            {value}
          </Label>
        </Stack>
        <Box py={1}>
          <YellowJewelIcon />
        </Box>

        <Box
          flex={1}
          width="100%"
          justifyContent="center"
          alignItems="center"
          bg="rgba(33, 39, 53, 0.75)">
          <Label color="white" fontWeight="bold" sz="small">
            ${money}
          </Label>
        </Box>
      </Stack>
    </Pressable>
  );
};
