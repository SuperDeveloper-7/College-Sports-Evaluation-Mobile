import React, { useLayoutEffect } from 'react';
import { Stack, Image, Box } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Constants, Images } from 'config';
import { Button, AccountSetupDescription } from 'components';
import { AuthStackParamList } from 'types';
import { LabeledPicker, LabeledMultiPicker } from 'components';
import { DefaultAvatar } from 'assets';

const AccountSetupComplete = () => {
  return <KeyboardAwareScrollView></KeyboardAwareScrollView>;
};

export default AccountSetupComplete;
