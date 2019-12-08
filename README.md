# KANTA APP

![](https://img.shields.io/github/license/SKempin/Lyrics-King-React-Native.svg?style=flat-square)
[![Build Status](https://travis-ci.org/SKempin/Lyrics-King-React-Native.svg?branch=master)](https://travis-ci.org/SKempin/Lyrics-King-React-Native)


KANTA APP is an e-commerce application focus on recommendation system.


## App Preview

### Video Preview

<a href="https://expo.io/@skempin/lyrics-king">
	<img src="https://github.com/SKempin/Lyrics-King-React-Native/blob/master/_github/screenshots/video.gif" width="350" >
</a>

### Search Screen

<img src="https://github.com/SKempin/Lyrics-King-React-Native/blob/master/_github/screenshots/search.jpg" width="270" alt="Lyrics King - Search screen" hspace="5"><img src="https://github.com/SKempin/Lyrics-King-React-Native/blob/master/_github/screenshots/suggestions.jpg" width="270" alt="Lyrics King - Suggestions on search screen">

### Details Screen

<img src="https://github.com/SKempin/Lyrics-King-React-Native/blob/master/_github/screenshots/details-ariana.jpg" width="270" hspace="5" alt="Lyrics King - Details screen, Ariana Grande"><img src="https://github.com/SKempin/Lyrics-King-React-Native/blob/master/_github/screenshots/details-above.jpg" width="270" hspace="5" alt="Lyrics King - Details screen, Above and Beyond"><img src="https://github.com/SKempin/Lyrics-King-React-Native/blob/master/_github/screenshots/details-dua.jpg" width="270"  alt="Lyrics King - Details screen, Dua Lipa">

### About Screen

<img src="https://github.com/SKempin/Lyrics-King-React-Native/blob/master/_github/screenshots/about.jpg" width="270" alt="Lyrics King - About screen">

### Navigation (Drawer)

<img src="https://github.com/SKempin/Lyrics-King-React-Native/blob/master/_github/screenshots/navigation.jpg" width="270" alt="Lyrics King - Navigation drawer">

## App Features

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
