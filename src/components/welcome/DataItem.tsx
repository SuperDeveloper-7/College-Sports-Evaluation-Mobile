import React from 'react';
import { ITextProps, Image, Stack, Text } from 'native-base';

type Props = ITextProps & {
  top_text?: string;
  bottom_text?: string;
  image?: string;
};

export const DataItem = ({ top_text, bottom_text, image }: Props) => {
  return (
    <Stack alignItems="center" space={1}>
      <Text fontWeight="bold" color="#D4B012">
        {top_text}
      </Text>
      <Text fontWeight="bold" color="#D4B012">
        {bottom_text}
      </Text>
      <Image source={image} width={40} height={40} />
    </Stack>
  );
};
