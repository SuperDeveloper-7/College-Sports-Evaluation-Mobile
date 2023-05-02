import React from 'react';
import { ITextProps, Pressable, Text, Stack, HStack, Image } from 'native-base';

type Props = ITextProps & {
  image?: string;
  title?: string;
  details?: string;
  info?: string;
  onPress?: () => void;
};

export const EvaluatingItem = ({
  image,
  title,
  details,
  info,
  onPress,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      _disabled={{ opacity: 50 }}
      _pressed={{ opacity: 75 }}>
      <HStack space={2} alignItems="center">
        <Image
          borderRadius={2}
          source={image}
          resizeMode="cover"
          width="1/3"
          height={75}
        />
        <Stack width="2/3">
          <Text fontSize={9} fontWeight="bold">
            {title}
          </Text>
          <Text fontSize={9} fontWeight="bold">
            {details}
          </Text>
          <Text fontSize={8} color="#4B5563">
            {info}
          </Text>
          <Pressable>
            <Text fontSize={9} fontWeight="bold">
              View Event
            </Text>
          </Pressable>
        </Stack>
      </HStack>
    </Pressable>
  );
};
