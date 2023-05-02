import React, { useState } from 'react';
import { Box, Stack, ITextProps, Pressable } from 'native-base';
import { P, Label } from 'components';
type Props = ITextProps & {
  title?: string;
  color?: string;
  icon?: any;
  value?: string;
};

export const MainScreenStateBox = ({ icon, title, color, value }: Props) => {
  return (
    <Box bg={color} position="relative" height="90px" borderRadius={5}>
      <Box position="absolute" top={3} left={3}>
        {icon}
      </Box>
      <Box
        position="absolute"
        bottom="3px"
        right="0px"
        borderBottomColor="#181E28"
        borderBottomStyle="solid"
        borderBottomWidth="87px"
        borderLeftStyle="solid"
        borderLeftWidth="80px"
        borderLeftColor="transparent"
        height="50px"
        width="90%"></Box>
      <Stack position="absolute" space={3} top={3} right={20}>
        <P sz="small" color="white">
          {title}
        </P>
        <P sz="medium" color="white">
          {value}
        </P>
      </Stack>
    </Box>
  );
};
