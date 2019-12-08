import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import * as Facebook from 'expo-facebook';
import { Alert } from 'react-native';
import { StorageHelper } from '@src/core/utils/storage.helper';
import { Profile } from './profile.component';


export interface ProfileModel {
  id: string,
  first_name: string,
  last_name: string,
  pic: string,
}

interface State {
  profile: ProfileModel
}

export class ProfileContainer extends React.Component<NavigationStackScreenProps> {
  componentWillMount() {
    // check login
    StorageHelper.get("PROFILE")
      .then(res => {
        if (res) {
          let profile = JSON.parse(res) as ProfileModel
          this.setState({profile: profile})
        }
      })
  }

  state: State = {
    profile: {
      id: '',
      first_name: '',
      last_name: '',
      pic: ''
    }
  }

  async logIn() {
    try {
      const { type, token} = await Facebook.logInWithReadPermissionsAsync(
        '1421035864714154', 
        {permissions: ['public_profile']}
      );

      if (type !== 'success') {
        return
      }

      // Get the user's name using Facebook's Graph API
      const infoRes = await fetch(`https://graph.facebook.com/me?fields=id,first_name, last_name&access_token=${token}`);
      const info = (await infoRes.json())
      const {id, first_name, last_name} = info

      const picRes = await fetch(`https://graph.facebook.com/${id}/picture?type=large&redirect=false&access_token=${token}`);
      const pic = await picRes.json()

      const profile = {
        id: id,
        first_name: first_name,
        last_name: last_name,
        pic: pic.data.url || ''
      }
      StorageHelper.set("PROFILE", JSON.stringify(profile))
      this.setState({profile: profile})
    } catch ({ message }) {
      Alert.alert(`Facebook Login Error: ${message}`);
    }
  }

  logout = () => {
    StorageHelper.delete("PROFILE")
    this.setState({ profile: {id: '', name: '', pic: ''} })
  }

  private onSignInPress = () => {
    this.logIn();
  };

  public render(): React.ReactNode {
    return (
      <Profile
        profile={this.state.profile}
        onSignInPress={this.onSignInPress}
        onSignoutPress={this.logout}
      />
    );
  }
}
