import React, { useState } from 'react';
import {
  Box,
  Text,
  ITextProps,
  HStack,
  HamburgerIcon,
  Pressable,
  ArrowBackIcon,
} from 'native-base';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { HomeStackParamList } from 'types';
import { Logo } from 'assets';
type Props = ITextProps & {
  title?: string;
  onPress?: () => void;
};

export const HomeHeader = () => {
  const { navigate } = useNavigation<NavigationProp<HomeStackParamList>>();
  const moveHomeHandler = () => {
    navigate('HomeNavigation', { screen: 'Main' });
  };
  return (
    <HStack
      flex={1}
      px={6}
      py={6}
      justifyContent="space-between"
      alignItems="center"
      zIndex={100}
      paddingTop={9}
      paddingBottom={5}
      bg="white">
      <HStack space={6} justifyContent="flex-start" alignItems="center">
        {/* <Pressable onPress={goBack}>
          <ArrowBackIcon />
        </Pressable> */}
        <Pressable
          onPress={moveHomeHandler}
          _disabled={{ opacity: 50 }}
          _pressed={{ opacity: 60 }}>
          <Logo width={60} height={30} />
        </Pressable>
      </HStack>
      <Pressable
        _disabled={{ opacity: 50 }}
        _pressed={{ opacity: 60 }}
        paddingRight={12}>
        <HamburgerIcon />
      </Pressable>
    </HStack>
  );
};
