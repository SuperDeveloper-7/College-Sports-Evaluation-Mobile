import React from 'react';
import { Stack, HStack, Text, Image, ITextProps } from 'native-base';
import { Images } from 'assets';
import { Button } from 'components';

type Props = ITextProps & {
  title?: string;
  price?: string;
  btnText?: string;
  onPress?: () => void;
};

export const EventItemPan = ({ title, price, btnText, onPress }: Props) => {
  return (
    <Stack space={2}>
      <Stack borderColor="gray.200" borderWidth={1} p={2}>
        <Stack space={3}>
          <Text fontSize={12}>{title}</Text>
          <HStack alignItems="flex-end">
            <Text color="#111827" fontWeight="extrabold" fontSize={20}>
              ${price}
            </Text>
            <Text fontSize={12}>/per player</Text>
          </HStack>
          <Button type="standard" sz="large" text={btnText} onPress={onPress} />
          <Text fontSize={12} color="gray.400">
            What you'll get
          </Text>
        </Stack>
        {/* Details */}
        <Stack paddingTop={2}>
          <Stack>
            <HStack alignItems="center">
              <Image source={Images.BlueCheckIconImage} />
              <Text fontSize={12} color="#111827">
                College Coach Run Camp
              </Text>
            </HStack>
            <HStack space={1} px={6} alignItems="center">
              <Image source={Images.BlueSuccessIconImage} />
              <Text fontSize={12} color="#111827">
                1:6 Coach to Player Ratio
              </Text>
            </HStack>
          </Stack>
          <Stack>
            <HStack alignItems="center">
              <Image source={Images.BlueCheckIconImage} />
              <Text fontSize={12} color="#111827">
                Leaderboard Listing
              </Text>
            </HStack>
            <HStack space={1} px={6} alignItems="center">
              <Image source={Images.BlueSuccessIconImage} />
              <Text fontSize={12} color="#111827">
                1:6 Coach to Player Ratio
              </Text>
            </HStack>
            <HStack space={1} px={6} alignItems="center">
              <Image source={Images.YellowCancelIconImage} />
              <Text fontSize={12} color="gray.300">
                Objective Measurement
              </Text>
            </HStack>
            <HStack space={1} px={6} alignItems="center">
              <Image source={Images.YellowCancelIconImage} />
              <Text fontSize={12} color="gray.300">
                Objective Measurement
              </Text>
            </HStack>
          </Stack>
          <Stack px={1}>
            <HStack space={1} alignItems="center">
              <Image source={Images.YellowCloseIconImage} />
              <Text fontSize={12} color="gray.300">
                Objective Sensor Measurement Report
              </Text>
            </HStack>
            <HStack space={1} px={6} alignItems="center">
              <Image source={Images.YellowCancelIconImage} />
              <Text fontSize={12} color="gray.300">
                Objective Measurement
              </Text>
            </HStack>
            <HStack space={1} px={6} alignItems="center">
              <Image source={Images.YellowCancelIconImage} />
              <Text fontSize={12} color="gray.300">
                Objective Measurement
              </Text>
            </HStack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
