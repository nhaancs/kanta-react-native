import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Button,
  Text,
} from '@kitten/ui';
import {
  ScrollableAvoidKeyboard,
  textStyle,
} from '@src/components/common';
import { View } from 'react-native';

interface ComponentProps {
  onSignInPress: () => void;
}

export type SignIn2Props = ThemedComponentProps & ComponentProps;

class SignIn2Component extends React.Component<SignIn2Props> {

  private onSignInButtonPress = () => {
    this.props.onSignInPress();
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

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
          style={themedStyle.signInButton}
          textStyle={textStyle.button}
          size='giant'
          onPress={this.onSignInButtonPress}>
          Đăng nhập với Facebook
        </Button>
      </ScrollableAvoidKeyboard>
    );
  }
}

export const SignIn2 = withStyles(SignIn2Component, (theme: ThemeType) => {
  return ({
    container: {
      flex: 1,
      backgroundColor: theme['background-basic-color-1'],
    },
    headerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 216,
      backgroundColor: theme['color-primary-default'],
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
      ...textStyle.subtitle,
    },
    signInButton: {
      width: '80%',
      bottom: 150,
      alignSelf: 'center',
      position: 'absolute',
    },
  });
});

