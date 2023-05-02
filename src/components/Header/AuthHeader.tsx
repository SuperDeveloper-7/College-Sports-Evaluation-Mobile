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

// import { ArrowButton } from 'components';
import { RootStackParamList } from 'types';
import { Logo } from 'assets';
type Props = ITextProps & {
  title?: string;
  onPress?: () => void;
};

export const AuthHeader = () => {
  const { goBack } = useNavigation<NavigationProp<RootStackParamList>>();
  const gobackHandler = () => {
    goBack();
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
      <HStack space={12} alignItems="center">
        {/* <ArrowButton goback={gobackHandler} /> */}
        <Pressable
          onPress={gobackHandler}
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
