import React from 'react';
import { Text, Box, Pressable, HStack, Stack } from 'native-base';
import { P } from 'components';
import { ParentIcon } from 'assets';
type Props = {
  onPress?: () => void;
  authType?: any;
  details?: string;
};
export const AuthTypeButton = ({ onPress, authType, details }: Props) => {
  return (
    <Pressable
      px={3}
      onPress={onPress}
      _disabled={{ opacity: 50 }}
      _pressed={{ opacity: 50 }}>
      <HStack space={1} justifyContent="center" alignItems="center" space={3}>
        <ParentIcon />
        <Stack>
          <Text fontSize={15}>{authType}</Text>
          <Text fontSize={12}>{details}</Text>
        </Stack>
      </HStack>
    </Pressable>
  );
};
