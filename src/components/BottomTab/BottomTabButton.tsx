import React from 'react';
import { ITextProps, Pressable } from 'native-base';

type Props = ITextProps & {
  width?: string;
  icon?: any;
  onPress?: () => void;
};

export const BottomTabButton = ({ icon, width, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      _disabled={{ opacity: 50 }}
      _pressed={{ opacity: 60 }}>
      {icon}
    </Pressable>
  );
};
