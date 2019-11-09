import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { SignIn2 } from './signIn2.component';

export class SignIn2Container extends React.Component<NavigationStackScreenProps> {

  private navigationKey: string = 'SignIn2Container';

  private onSignInPress = () => {
    this.props.navigation.goBack();
  };

  public render(): React.ReactNode {
    return (
      <SignIn2
        onSignInPress={this.onSignInPress}
      />
    );
  }
}
