import React, { useEffect, useState } from 'react';
import { HStack, Stack, Box, Text, Pressable, CloseIcon } from 'native-base';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import auth from '@react-native-firebase/auth';

import { Button, TextButton, LabeledInput } from 'components';
import { RootStackParamList } from 'types';
import { Colors } from 'config';
import { Images, Logo } from 'assets';

const ParentSignUp = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  // const [showPassword, setShowPassword] = useState<boolean>(true);
  // const [secureImage, setSecureImage] = useState<any>(Images.EyeShowImage);
  const [showSecurePassword, setShowSecurePassword] = useState<boolean>(true);
  const [securePwdImage, setSecurePwdImage] = useState<any>(
    Images.EyeShowImage
  );

  const signinHandler = async () => {
    navigate('AuthNavigation', { screen: 'SignIn' });
  };
  const registerHandler = () => {};
  useEffect(() => {}, []);

  const clearEmail = () => {};

  return (
    <Stack px={6}>
      <KeyboardAwareScrollView>
        <Logo width={140} height={70} />
        <Stack py={6} space={1}>
          <Text fontSize={20} fontWeight="bold">
            Create Your Parent Account
          </Text>
          <Pressable>
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
          </Pressable>
          <Text fontSize={14}>
            Please use the email that you registered for {'\n'} the CSE with.
          </Text>
        </Stack>
        <LabeledInput
          type="email"
          label="Parent Email address"
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

export default ParentSignUp;
