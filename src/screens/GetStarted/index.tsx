import React from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import { Box, StatusBar, Stack } from 'native-base';

import { Button } from 'components';
import { RootStackParamList } from 'types';
import { Images, Logo } from 'assets';
import { Colors } from 'config';
const GetStarted = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const onGoSignInHandler = () => {
    navigate('AuthNavigation', { screen: 'SignIn' });
  };
  const onGoWelcomeHandler = () => {
    navigate('HomeNavigation', { screen: 'Main' });
  };

  return (
    <Box flex={1}>
      <StatusBar backgroundColor={Colors.transparent} translucent />
      <ImageBackground source={Images.WelcomeImage} style={{ flex: 1 }}>
        <Box flex={1} justifyContent="space-between" px={6} paddingBottom={60}>
          <Stack paddingTop={35}>
            <Logo width={150} height={70} />
          </Stack>

          <Stack space="2" justifyContent="center" mt="5">
            <Button
              sz="large"
              onPress={onGoSignInHandler}
              type="secondary"
              text="Sign in"
              shadow="7"
            />
            <Button
              sz="large"
              onPress={onGoWelcomeHandler}
              type="primary"
              text="Skip"
              shadow="3"
            />
          </Stack>
        </Box>
      </ImageBackground>
    </Box>
  );
};

export default GetStarted;
