import React, { useEffect, useState } from 'react';
import {
  HStack,
  Stack,
  Box,
  Text,
  Pressable,
  CloseIcon,
  ScrollView,
  ArrowForwardIcon,
} from 'native-base';
import { Platform } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// import { useLogin } from 'common/src/services/loginServices';
import { Button, Label, LabeledInput } from 'components';
import { RootStackParamList } from 'types';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { appleAuth } from '@invertase/react-native-apple-authentication';
import auth from '@react-native-firebase/auth';
// import { useAuth } from 'common/src/services/authServices';
import { Images, ImportantIcon, Logo } from 'assets';

const ForgotPassword = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  // const [showPassword, setShowPassword] = useState<boolean>(true);
  // const [secureImage, setSecureImage] = useState<any>(Images.EyeShowImage);
  const [showSecurePassword, setShowSecurePassword] = useState<boolean>(true);
  const [securePwdImage, setSecurePwdImage] = useState<any>(
    Images.EyeShowImage
  );
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(true);
  const [confirmPwdImage, setConfirmPwdImage] = useState<any>(
    Images.EyeShowImage
  );

  const signinHandler = async () => {
    navigate('AuthNavigation', { screen: 'SignIn' });
  };
  const forgotPasswordHandler = () => {};
  useEffect(() => {}, []);

  const clearEmail = () => {};

  return (
    <Stack px={6} justifyContent="center">
      <Stack justifyContent="center" paddingTop={6}>
        <Logo width={150} height={75} />
      </Stack>
      <Stack py={6}>
        <Text fontSize={20} fontWeight="bold">
          Forgot your password
        </Text>
      </Stack>
      <LabeledInput
        type="email"
        label="Email"
        placeholder="john.doe@cseval.com"
        rightElement={<CloseIcon />}
        onPressedRightElement={clearEmail}
      />

      <Button
        onPress={forgotPasswordHandler}
        text="Send"
        sz="large"
        type="standard"
      />
      <Pressable>
        <HStack space={1} justifyContent="center">
          <Text fontSize={12}>Or</Text>
          <Pressable
            onPress={signinHandler}
            _disabled={{ opacity: 50 }}
            _pressed={{ opacity: 60 }}>
            <Text fontSize={14} color="#0a3254">
              login to your account
            </Text>
          </Pressable>
        </HStack>
      </Pressable>
    </Stack>
  );
};

export default ForgotPassword;
