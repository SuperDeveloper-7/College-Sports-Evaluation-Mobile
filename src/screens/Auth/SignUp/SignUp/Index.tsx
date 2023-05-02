import React from 'react';
import { Stack, Text } from 'native-base';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { AuthTypeButton, Label } from 'components';
import { RootStackParamList } from 'types';
import { Logo } from 'assets';
const SignUp = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  const MoveParentAuth = () => {
    navigate('AuthNavigation', { screen: 'ParentSignUp' });
  };
  const MovePlayerAuth = () => {
    navigate('AuthNavigation', { screen: 'PlayerSignUp' });
  };

  return (
    <Stack
      py={6}
      justifyContent="center"
      space={6}
      alignItems="center"
      flex={1}>
      <Logo width={150} height={75} />
      <Stack>
        <Label sz="large" fontWeight="extrabold">
          Welcome to College Sports {'\n'}Evaluation
        </Label>
        <Text>Set up your free account to access.</Text>
      </Stack>
      <Stack space={6}>
        <AuthTypeButton
          onPress={MoveParentAuth}
          authType="Parent"
          details="Create a Parent Account"
        />
        <AuthTypeButton
          onPress={MovePlayerAuth}
          authType="Player"
          details="Create a Player Account"
        />
      </Stack>
    </Stack>
  );
};

export default SignUp;
