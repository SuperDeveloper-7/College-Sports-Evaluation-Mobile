import React from 'react';
import { Text, Box, Pressable, HStack } from 'native-base';
import { P } from 'components';
type Props = {
  onPress?: () => void;
  icon?: any;
  text?: string;
  color?: string;
};
export const AuthButton = ({ onPress, icon, text, color }: Props) => {
  return (
    <Pressable
      _disabled={{ opacity: 50 }}
      _pressed={{ opacity: 60 }}
      onPress={onPress}>
      <HStack
        bg="#181E28"
        space={3}
        borderRadius={6}
        A
        p={3}
        position="relative"
        justifyContent="center">
        <Box
          borderRadius={3}
          position="absolute"
          bg={color}
          flex={1}
          left={0}
          top={-2}
          p={3}
          alignItems="center"
          justifyContent="center"
          width="1/5">
          {icon}
        </Box>
        <Text color="white" fontSize={12}>
          {text}
        </Text>
      </HStack>
    </Pressable>
  );
};
