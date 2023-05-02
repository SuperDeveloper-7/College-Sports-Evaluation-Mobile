import React, { useState } from 'react';
import { Box, Center, HStack, Stack, Text } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { Colors, Images } from 'config';
import { Button, LabeledInput, Label, P } from 'components';
import { AuthStackParamList } from 'types';
import { LabeledDatePicker, LabeledPhoneInput } from 'components';
// import { useSignupProfile } from 'common/src/services/signupServices';
import { makeIntoPhoneNumber } from 'utils';
import { Country, CountryCode } from 'react-native-country-picker-modal';
import { moveToBottom } from 'utils';

const AccountSetupProfile = () => {
  const { navigate } = useNavigation<NavigationProp<AuthStackParamList>>();
  // const signupService = useSignupProfile();
  const [showToolTip, setShowToolTip] = useState(false);
  const [countryCode, setCountryCode] = useState<CountryCode>('US');
  const [country, setCountry] = useState<Country>({
    callingCode: ['1'],
    cca2: 'US',
    currency: ['USD'],
    flag: 'flag-us',
    name: 'United States',
    region: 'Americas',
    subregion: 'North America',
  });

  const onSelect = (c: Country) => {
    setCountryCode(c.cca2);
    setCountry(c);
  };

  const onNextHandler = async () => {
    navigate('AccountSetupAvatar');
  };

  const onPressDobToolTip = () => {
    setShowToolTip(!showToolTip);
  };

  return (
    <Stack flex={1} bg="#11161f" flex={1}>
      <KeyboardAwareScrollView>
        <Box
          marginX={10}
          flex={1}
          justifyContent="space-between"
          paddingBottom={6}>
          <Center>
            <Text fontSize={24} color="orange.600" fontWeight="bold">
              Great! - Profile
            </Text>
          </Center>
          <LabeledInput
            label="FIRST NAME"
            // value={signupService.firstName}
            // error={signupService.firstNameError}
            // onChange={signupService.setFirstName}
            placeholder="Enter your first name"
          />

          <LabeledInput
            label="LAST NAME"
            // value={signupService.lastName}
            // error={signupService.lastNameError}
            // onChange={signupService.setLastName}
            placeholder="Enter your last name"
          />
          <Box>
            <LabeledDatePicker
              label="DATE OF BIRTH"
              // date={signupService.dob ? signupService.dob : new Date()}
              // setDate={signupService.setDob}
              // error={signupService.dobError}
              hasMaxDate
              onPressToolTip={onPressDobToolTip}
            />
            {showToolTip && (
              <Box
                maxWidth="220"
                rounded="lg"
                p="2"
                backgroundColor={Colors.primary.blue}
                position="absolute"
                left="90"
                top="-75">
                <P color="white" sz="small">
                  Please select your birth
                </P>
              </Box>
            )}
          </Box>

          <LabeledPhoneInput
            label="PHONE (OPTIONAL)"
            // value={makeIntoPhoneNumber(signupService.phone)}
            // error={signupService.phoneError}
            // onChange={signupService.setPhone}
            placeholder="(000) 000-0000"
            onCountryCodePicked={onSelect}
            country={country}
            countryCode={countryCode}
          />
          {moveToBottom(
            <Button
              text="Next"
              sz="large"
              type="primary"
              onPress={onNextHandler}
              shadow="3"
            />
          )}
        </Box>
      </KeyboardAwareScrollView>
    </Stack>
  );
};

export default AccountSetupProfile;
