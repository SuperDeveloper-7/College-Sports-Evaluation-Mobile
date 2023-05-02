import React, { useState } from 'react';
import { Box, View } from 'native-base';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// import { View } from 'react-native';
import { LabeledInput, Label, Button } from 'components';
import { AuthStackParamList } from 'types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Images } from 'config';
// import { useSignupEmail } from 'common/src/services/signupServices';

const AccountSetupEmailAddress = () => {
  const { navigate } = useNavigation<NavigationProp<AuthStackParamList>>();
  // const signupService = useSignupEmail();
  const onContinueEmailHandler = async () => {};

  const clearEmail = async () => {};

  return (
    <Box px={8} bg="#11161f" flex={1}>
      <KeyboardAwareScrollView>
        <Label color="white" sz="large" fontWeight="bold">
          Sign In
        </Label>
        <Box marginTop={5}>
          <LabeledInput
            label="YOUR EMAIL"
            placeholder="Enter your email"
            rightElement={Images.CircleCloseImage}
            onPressedRightElement={clearEmail}
          />
          <Button
            text="Next"
            sz="large"
            type="primary"
            onPress={onContinueEmailHandler}
            shadow="3"
          />
        </Box>
      </KeyboardAwareScrollView>
    </Box>
  );
};

export default AccountSetupEmailAddress;
