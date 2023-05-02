import React, { useState } from 'react';
import { HStack, Stack, Box, Text, CloseIcon, ScrollView } from 'native-base';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { AuthProvider } from 'services';
import { Button, Label, LabeledInput, TextButton } from 'components';
import { RootStackParamList } from 'types';
import { Images, ImportantIcon } from 'assets';
import { Colors } from 'config';

const SignIn = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const [showSecurePassword, setShowSecurePassword] = useState<boolean>(true);
  const [securePwdImage, setSecurePwdImage] = useState<any>(
    Images.EyeShowImage
  );
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const signinHandler = async () => {
    // AuthProvider.SignUp(email, password);
    // navigate('AuthNavigation', { screen: 'AccountSetupPassword' });
  };
  const signupHandler = async () => {
    navigate('AuthNavigation', { screen: 'SignUp' });
  };
  const forgotPasswordHandler = () => {
    navigate('AuthNavigation', { screen: 'ForgotPassword' });
  };

  const clearEmail = () => {};

  return (
    <ScrollView px={6}>
      <KeyboardAwareScrollView>
        <Stack py={6}>
          <Label sz="large" fontWeight="bold">
            Sign in to Your {'\n'} Account
          </Label>
          <HStack space={1}>
            <Text fontSize={12}>Or</Text>
            <TextButton
              fontSize={12}
              onPress={signupHandler}
              color={Colors.standard}
              text="Register for a CSE to Create an Account"
            />
          </HStack>
        </Stack>
        <LabeledInput
          type="email"
          label="Email address"
          value={email}
          onChange={setEmail}
          placeholder="Enter your email"
          rightElement={<CloseIcon />}
          onPressedRightElement={clearEmail}
        />
        <LabeledInput
          label="Password"
          value={password}
          onChange={setPassword}
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
        <Stack alignItems="flex-end" paddingBottom={6}>
          <TextButton
            onPress={forgotPasswordHandler}
            text="Forgot your password"
            fontSize={12}
            color={Colors.standard}
          />
        </Stack>
        <Button
          onPress={signinHandler}
          text="Sign In"
          sz="large"
          type="standard"
        />
        <HStack space={2} p={3} bg="#f3f4f6" marginTop={4}>
          <Box
            width={5}
            height={5}
            bg={Colors.standard}
            borderRadius={15}
            display="flex"
            alignItems="center"
            justifyContent="center">
            <ImportantIcon />
          </Box>
          <Stack space={3}>
            <Text color={Colors.standard}>Activate Account</Text>
            <Text fontSize={11} color={Colors.standard} paddingRight={2}>
              If you are having troubles signing into your account, you may
              still need to activate your CSE Account.
              {'\n'} Click the link below to get started.
            </Text>
            <TextButton
              onPress={signupHandler}
              text="Activate Account"
              fontSize={12}
              color={Colors.standard}
            />
          </Stack>
        </HStack>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

export default SignIn;
