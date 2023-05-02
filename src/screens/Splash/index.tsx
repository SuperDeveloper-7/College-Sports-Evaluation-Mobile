import React, { useEffect } from 'react';
import {
  Spinner,
  HStack,
  Heading,
  Center,
  NativeBaseProvider,
  Stack,
} from 'native-base';
import { CarIcon, Logo } from 'assets';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { GetStartedStackParamList } from 'types';

const Example = () => {
  const { navigate } =
    useNavigation<NavigationProp<GetStartedStackParamList>>();

  useEffect(() => {
    setTimeout(() => {
      navigate('GetStarted');
    }, 1250);
  }, []);
  return (
    <Stack>
      <Logo width={120} height={70} />
      <HStack space={2} paddingTop={3} justifyContent="center">
        <Spinner accessibilityLabel="Loading posts" />
      </HStack>
    </Stack>
  );
};

const Splash = () => {
  return (
    <NativeBaseProvider bg="11161F">
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};
export default Splash;
