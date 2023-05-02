import React from 'react';
import { ITextProps, Pressable, Stack, Text } from 'native-base';

type Props = ITextProps & {
  title?: string;
  smallTitle?: string;
  desOne?: string;
  desTwo?: string;
  btnText?: string;
  onPress?: () => void;
};

export const More = ({
  title,
  smallTitle,
  desOne,
  desTwo,
  btnText,
  onPress,
}: Props) => {
  return (
    <Stack mx={6} borderRadius={3}>
      <Stack alignItems="center" bg="#00305C" p={2}>
        <Text fontSize={20} color="white" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize={15} color="white" fontWeight="bold">
          {smallTitle}
        </Text>
      </Stack>
      <Stack bg="#f8f8f8" alignItems="center" space={2} px={2} py={4}>
        <Text color="#00305C"> {desOne} </Text>
        <Text color="#00305C">{desTwo} </Text>
        <Pressable
          _disabled={{ opacity: 50 }}
          _pressed={{ opacity: 60 }}
          onPress={onPress}
          bg="#D4B012"
          px={3}
          py={1}
          borderRadius={3}>
          <Text color="white">{btnText}</Text>
        </Pressable>
      </Stack>
    </Stack>
  );
};
