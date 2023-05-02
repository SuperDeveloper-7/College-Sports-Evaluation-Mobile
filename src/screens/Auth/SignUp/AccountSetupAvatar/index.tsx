import React, { useState } from 'react';
import { Stack, Center, useDisclose, Actionsheet, Box } from 'native-base';
import { Label, P, Button } from 'components';
import { UserAvatar } from 'components';
import {
  ImageOrVideo,
  openCamera,
  openPicker,
  Options,
} from 'react-native-image-crop-picker';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from 'types';
import { moveToBottom } from 'utils';
import { Colors } from 'config';
// import { useSignupProfilePicture } from 'common/src/services/signupServices';

// AccountSetupAvatar
const AccountSetupAvatar = () => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const [profilePicture, setProfilePicture] = React.useState<Blob | null>(null);
  const [profilePictureUri, setProfilePictureUri] = useState('');
  const [showExample, setShowExample] = useState(false);

  // const signupService = useSignupProfilePicture();

  const onContinueHandler = async () => {
    navigate('HomeNavigation');
  };

  const onEditAvatar = () => {
    onOpen();
  };

  const onOpenImagePicker = (type: string) => {
    onClose();
    const pickerOption: Options = {
      width: 300,
      height: 300,
      mediaType: 'photo',
      smartAlbums: ['UserLibrary'],
      cropping: true,
    };
    if (type === 'camera') {
      openCamera(pickerOption)
        .then(onSelectAvatar)
        .catch(e => console.log(e));
    } else {
      openPicker(pickerOption)
        .then(onSelectAvatar)
        .catch(e => console.log(e));
    }
  };

  const onSelectAvatar = async (assets: ImageOrVideo) => {
    if (assets?.size && assets?.path) {
      const filename = assets?.path.split('/').slice(-1)[0];
      const formData = new FormData();
      formData.append('image', {
        uri: assets?.path,
        type: assets?.mime,
        name: filename,
      });

      setProfilePictureUri(assets?.path);
      const img = await fetch(assets?.path);
      const bytes = await img.blob();
      setProfilePicture(bytes);
    }
  };

  return (
    <Box flex={1} bg="#11161f">
      <Stack flex={1}>
        <Stack space="2" paddingTop={10}>
          <Center marginX={10}>
            <UserAvatar
              photo={profilePictureUri}
              showAdd={!profilePictureUri}
              sz={'xLarge'}
              openImagePicker={onEditAvatar}
            />
            <Label textAlign="center" color="white" sz="large" mt={6}>
              Profile Picture
            </Label>
            <P textAlign="center" color={Colors.content.des} sz="small">
              Uploading a profile photo will make your RLSimulator's cover page
              beautiful and professional when you export and/or print it.
            </P>
          </Center>
        </Stack>
        {moveToBottom(
          <Button
            text="Complete"
            sz="large"
            type="primary"
            onPress={onContinueHandler}
            shadow="3"
            px={'8'}
          />
        )}
      </Stack>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Actionsheet.Item onPress={() => onOpenImagePicker('camera')}>
            Open Camera
          </Actionsheet.Item>
          <Actionsheet.Item onPress={() => onOpenImagePicker('library')}>
            Select Photo
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Box>
  );
};

export default AccountSetupAvatar;
