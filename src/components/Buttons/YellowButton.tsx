import React from 'react';
import { ITextProps, Text, Pressable } from 'native-base';

type Props = ITextProps & {
  title?: string;
  mb?: number;
  mt?: number;
  onPress?: () => void;
};

export const YellowButton = ({ mb, mt, title, onPress }: Props) => {
  return (
    <Pressable
      bg="#D4B012"
      px={4}
      py={1}
      marginTop={mt}
      marginBottom={mb}
      borderRadius={4}
      onPress={onPress}
      _disabled={{ opacity: 50 }}
      _pressed={{ opacity: 60 }}>
      <Text fontSize={20} fontWeight="bold" color="white">
        {title}
      </Text>
    </Pressable>
  );
};
