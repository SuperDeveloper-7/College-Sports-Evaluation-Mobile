import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GetStarted, Splash } from 'screens';
import { WelcomeStackParamList } from 'types';

const WelcomeStack = createStackNavigator<WelcomeStackParamList>();

const WelcomeNavigation = () => {
  return (
    <WelcomeStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <WelcomeStack.Screen name="Splash" component={Splash} />
      <WelcomeStack.Screen name="GetStarted" component={GetStarted} />
    </WelcomeStack.Navigator>
  );
};

export default WelcomeNavigation;
