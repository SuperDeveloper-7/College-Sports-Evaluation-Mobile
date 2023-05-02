import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamList } from 'types';

import {
  SignIn,
  ParentSignUp,
  PlayerSignUp,
  SignUp,
  ForgotPassword,
} from 'screens';
import { ArrowIcon, AuthHeader } from 'components';

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: true,
        gestureEnabled: false,
        headerBackTitleVisible: false,
        headerBackImage: () => <ArrowIcon />,
      }}>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: 'SignIn',
          header: AuthHeader,
        }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: 'SignUp',
          header: AuthHeader,
        }}
      />
      <AuthStack.Screen
        name="ParentSignUp"
        component={ParentSignUp}
        options={{
          title: 'ParentSignUp',
          header: AuthHeader,
        }}
      />
      <AuthStack.Screen
        name="PlayerSignUp"
        component={PlayerSignUp}
        options={{
          title: 'PlayerSignUp',
          header: AuthHeader,
        }}
      />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          title: 'PlayerSignUp',
          header: AuthHeader,
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
