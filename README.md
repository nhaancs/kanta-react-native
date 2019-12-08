# KANTA APP

![](https://img.shields.io/github/license/SKempin/Lyrics-King-React-Native.svg?style=flat-square)
[![Build Status](https://travis-ci.org/SKempin/Lyrics-King-React-Native.svg?branch=master)](https://travis-ci.org/SKempin/Lyrics-King-React-Native)


KANTA APP is an e-commerce application focus on recommendation system.


## App Preview

### Home Screen

![](https://github.com/nhaancs/kanta-react-native/blob/master/src/assets/images/home.png)

### Product Detail Screen

![](https://github.com/nhaancs/kanta-react-native/blob/master/src/assets/images/detail.png)

### Profile Screen

![](https://github.com/nhaancs/kanta-react-native/blob/master/src/assets/images/profile1.png)
![](https://github.com/nhaancs/kanta-react-native/blob/master/src/assets/images/profile2.png)


## Project structure

### Screens

`src/screens/`

- `SearchScreen.js` - Search the [Deezer API](https://developers.deezer.com/) by song title (_class component_)
- `DetailsScreen.js` - Selected song details (including [Lyrics.ovh](https://www.lyrics.ovh/) API call) (_class component_)
- `AboutScreen.js` - About details (_functional component_)

### Components

`src/components/`

- `Credits.js` - Development credentials template (_functional component_)
- `SocialButton.js` - Button template for sharing links/ the app (_functional component_)
- `Suggestions.js` - Song suggestions (_functional component_)

### Config

`src/config/`

- `router.js` - App navigation routing (including drawer nav render method)
- `colours.js` - Colour constants

### Lib

`src/lib/`

- `constants.js` - Expo manifest [constants](https://docs.expo.io/versions/latest/sdk/constants#__next) and functions

### Utils

`src/utils/`

- `shareHelper.js` - Native device [share method](https://docs.expo.io/versions/latest/react-native/share)

## Getting Started

1. Install the latest Node
2. Install [Expo](https://expo.io/) - `npm install expo-cli --global`
3. `cd` into this project directory
4. `npm install` or `yarn install`
5. Run `expo start`

## License

You are welcome to use this however you wish within the MIT license.
