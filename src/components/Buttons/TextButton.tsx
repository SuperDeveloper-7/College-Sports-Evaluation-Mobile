import React from 'react';
import { ArrowBackIcon, Pressable, Text, Box } from 'native-base';
type Props = {
  onPress?: () => void;
  color?: string;
  fontSize?: number;
  fontWeight?: string;
  text?: string;
};
export const TextButton = ({
  onPress,
  color,
  fontSize,
  fontWeight,
  text,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      _disabled={{ opacity: 50 }}
      _pressed={{ opacity: 60 }}>
      <Text fontSize={fontSize} fontWeight={fontWeight} color={color}>
        {text}
      </Text>
    </Pressable>
  );
};
