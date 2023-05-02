import React from 'react';
import { ArrowBackIcon, Pressable } from 'native-base';

type Props = {
  goback?: () => void;
};
// ArrowButton
export const ArrowButton = ({ goback }: Props) => {
  return (
    <Pressable
      onPress={goback}
      _disabled={{ opacity: 50 }}
      _pressed={{ opacity: 60 }}>
      <ArrowBackIcon />
    </Pressable>
  );
};
