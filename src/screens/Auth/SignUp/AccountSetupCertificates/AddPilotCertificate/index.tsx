import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  Actionsheet,
  Box,
  HStack,
  Input,
  Stack,
  StatusBar,
  useDisclose,
} from 'native-base';
import { Constants } from 'config';
import { Button, LabeledInput, SelectableButton } from 'components';
import { Alert, Pressable, useWindowDimensions } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AuthStackParamList } from 'types';
import {
  LabeledDatePicker,
  LabeledMultiPicker,
  LabeledPicker,
} from 'components';
// import { usePilotCertificates } from 'common/src/services/pilotCertificateServices';

const AddPilotCertificate = () => {
  return <Box></Box>;
};

export default AddPilotCertificate;
