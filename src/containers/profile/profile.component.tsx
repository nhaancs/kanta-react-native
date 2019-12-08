import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Button,
  Text,
  Icon,
  Layout,
} from '@kitten/ui';
import {
  ScrollableAvoidKeyboard,
} from '@src/components/common';
import { View } from 'react-native';
import { textStyle } from '../../components/common/style';
import { ProfileSettings1 } from '../profileSettings1/profileSettings1.component';
import { ProfileModel } from './profile.container';

interface ComponentProps {
  onSignInPress: () => void;
  onSignoutPress: () => void;
  profile: ProfileModel
}

export type ProfileProps = ThemedComponentProps & ComponentProps;

const renderIcon = (style) => (
  <Icon
    name={'facebook'}
    {...style}
  />
);

class ProfileComponent extends React.Component<ProfileProps> {

  private onSignInButtonPress = () => {
    this.props.onSignInPress();
  };
  
  private onSignoutButtonPress = () => {
    this.props.onSignoutPress();
  };

  public render(): React.ReactNode {
    const { themedStyle, profile } = this.props;

    if (!profile.id) {  
      return (
        <ScrollableAvoidKeyboard style={themedStyle.container}>
          <View style={themedStyle.headerContainer}>
            <Text
              style={themedStyle.helloLabel}
              category='h1'>
              Xin chào
            </Text>
            <Text
              style={themedStyle.signInLabel}
              category='s1'>
              Vui lòng đăng nhập vào tài khoản của bạn
            </Text>
          </View>
          <Button
            icon={renderIcon}
            style={themedStyle.signInButton}
            textStyle={{...textStyle.button}}
            size='giant'
            status="danger"
            onPress={this.onSignInButtonPress}>
            Đăng nhập với Facebook
          </Button>
        </ScrollableAvoidKeyboard>
      );
    }
    
    return (
      <ProfileSettings1
        profile={profile}
        onButtonPress={this.onSignoutButtonPress}
      />
    )
  }
}

export const Profile = withStyles(ProfileComponent, (theme: ThemeType) => {
  return ({
    container: {
      flex: 1,
      backgroundColor: theme['background-basic-color-1'],
    },
    headerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 216,
      backgroundColor: theme['color-danger-default'],
    },
    formContainer: {
      flex: 1,
      marginTop: 32,
      paddingHorizontal: 16,
    },
    helloLabel: {
      color: 'white',
      ...textStyle.headline,
    },
    signInLabel: {
      marginTop: 16,
      color: 'white',
      fontSize: 14,
      ...textStyle.subtitle,
    },
    signInButton: {
      width: '90%',
      bottom: 150,
      alignSelf: 'center',
      position: 'absolute',
    },
  });
});

