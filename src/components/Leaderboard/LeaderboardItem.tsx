import React from 'react';
import { Text, Stack, ITextProps, Pressable } from 'native-base';
type Props = ITextProps & {
  date?: string;
  topTitle?: string;
  bottomTitle?: string;
  topSmallTitle?: string;
  bottomSmallTitle?: string;
  onPress?: () => void;
};

export const LeaderboardItem = ({
  date,
  topTitle,
  bottomTitle,
  topSmallTitle,
  bottomSmallTitle,
  onPress,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      _disabled={{ opacity: 50 }}
      _pressed={{ opacity: 60 }}>
      <Stack p={2} bg="gray.50" borderRadius={5}>
        <Text fontSize={10} fontWeight="bold" color="#1A202C">
          {date}
        </Text>
        <Text fontSize={14} fontWeight="bold" color="#1A202C">
          {topTitle}
        </Text>
        <Text fontSize={14} fontWeight="bold" color="#1A202C">
          {bottomTitle}
        </Text>
        <Stack p={2}>
          <Text fontSize={10} fontWeight="bold" color="#1A202C">
            {topSmallTitle}
          </Text>
          <Text fontSize={10} color="#A0AEC0">
            {bottomSmallTitle}
          </Text>
        </Stack>
      </Stack>
    </Pressable>
  );
};
