import React from 'react';
import {
  ButtonProps,
  View,
} from 'react-native';
import { ThemedComponentProps, withStyles, ThemeType } from '@kitten/theme';
import { Button } from '@kitten/ui';
import { CameraIconFill } from '@src/assets/icons';
import { ProfilePhoto } from '../../components/profileSettings/profilePhoto.component';
import { ProfileSetting } from '../../components/profileSettings/profileSetting.component';
import { RemoteImage } from '../../assets/images/type';
import { ProfileModel } from '../profile/profile.container';
import {
  ContainerView,
  textStyle,
} from '@src/components/common';

interface ComponentProps {
  profile: ProfileModel;
  onButtonPress: () => void;
}

export type ProfileSettings1Props = ThemedComponentProps & ComponentProps;

class ProfileSettings1Component extends React.Component<ProfileSettings1Props> {

  private onButtonPress = () => {
    this.props.onButtonPress();
  };

  private renderPhotoButton = (): React.ReactElement<ButtonProps> => {
    const { themedStyle } = this.props;

    return (
      <Button
        style={themedStyle.photoButton}
        status='basic'
        icon={CameraIconFill}
      />
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, profile } = this.props;
    const image = new RemoteImage(profile.pic)

    return (
      <ContainerView style={themedStyle.container}>
        <View style={themedStyle.photoSection}>
          <ProfilePhoto
            style={themedStyle.photo}
            source={image.imageSource}
            button={this.renderPhotoButton}
          />
        </View>
        <View style={themedStyle.infoSection}>
          <ProfileSetting
            style={themedStyle.profileSetting}
            hint='First Name'
            value={profile.first_name}
          />
          <ProfileSetting
            style={themedStyle.profileSetting}
            hint='Last Name'
            value={profile.last_name}
          />
        </View>
        <Button
          style={themedStyle.button}
          textStyle={textStyle.button}
          size='large'
          status='danger'
          onPress={this.onButtonPress}>
          Đăng Xuất
        </Button>
      </ContainerView>
    );
  }
}

export const ProfileSettings1 = withStyles(ProfileSettings1Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-2'],
  },
  photoSection: {
    marginVertical: 40,
  },
  infoSection: {
    marginTop: 24,
    backgroundColor: theme['background-basic-color-1'],
  },
  contactSection: {
    marginTop: 24,
    backgroundColor: theme['background-basic-color-1'],
  },
  profileSetting: {
    borderBottomWidth: 1,
    borderBottomColor: theme['border-basic-color-2'],
  },
  photo: {
    width: 124,
    height: 124,
    alignSelf: 'center',
  },
  photoButton: {
    top: 82,
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  button: {
    marginHorizontal: 24,
    marginVertical: 24,
  },
}));
