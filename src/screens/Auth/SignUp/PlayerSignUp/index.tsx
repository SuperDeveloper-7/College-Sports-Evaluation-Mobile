import React, { useState } from 'react';
import { HStack, Stack, Box, Text, Pressable, CloseIcon } from 'native-base';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import auth from '@react-native-firebase/auth';

import { Button, LabeledInput, TextButton } from 'components';
import { RootStackParamList } from 'types';
import { Colors } from 'config';
import { Images, Logo } from 'assets';

const PlayerSignUp = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const [showSecurePassword, setShowSecurePassword] = useState<boolean>(true);
  const [securePwdImage, setSecurePwdImage] = useState<any>(
    Images.EyeShowImage
  );

  const signinHandler = async () => {
    navigate('AuthNavigation', { screen: 'SignIn' });
  };
  const registerHandler = () => {};
  const clearEmail = () => {};

  return (
    <Stack px={6}>
      <KeyboardAwareScrollView>
        <Stack py={6} space={3}>
          <Logo width={150} height={75} />
          <Text fontSize={18} fontWeight="bold">
            Create Your Player Account
          </Text>
          <HStack space={1}>
            <Text fontSize={12}>Or</Text>
            <TextButton
              fontWeight="bold"
              fontSize={14}
              onPress={signinHandler}
              color={Colors.standard}
              text="login to your existing account"
            />
          </HStack>
          <Text>
            Please use the same email address that was used in conjunction with
            your previous CSE evaluation.
          </Text>
        </Stack>
        <LabeledInput
          type="email"
          label="Player Email address"
          placeholder="cseval@cseval.com"
          rightElement={<CloseIcon />}
          onPressedRightElement={clearEmail}
        />
        <LabeledInput
          label="Password"
          isSecure={showSecurePassword}
          isShowPassword={!showSecurePassword}
          placeholder="Enter your secure password"
          rightElement={securePwdImage}
          onPressedRightElement={() => {
            setShowSecurePassword(!showSecurePassword);
            setSecurePwdImage(
              showSecurePassword ? Images.EyeHideImage : Images.EyeShowImage
            );
          }}
        />
        <Button
          onPress={registerHandler}
          text="Register"
          sz="large"
          type="standard"
        />
      </KeyboardAwareScrollView>
    </Stack>
  );
};

export default PlayerSignUp;
