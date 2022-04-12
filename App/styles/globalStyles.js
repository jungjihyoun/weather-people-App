import {Dimensions} from 'react-native';

export const fonts = {
  suitB: 'SUIT-Bold',
  suitL: 'SUIT-Light',
  suitM: 'SUIT-Medium',
  YdeB: 'YdestreetB',
  YdeL: 'YdestreetL',
};

export const colors = {
  primary: '#44BCCE',
  black: '#000000',
  white: '#ffffff',

  prBlue: '#62B3FF',
  prPink: '#FF99E2',
  prGreen: '#84E5B1',
  prPurple: '#BA99FF',
  alBlue: '#62B3FF',
  alError: '#FF8A8A',
  //social button colors
  apple: '#040708',
  kakaoTalk: '#FBE950',
};

export const storyBoardDimensions = {
  height: 835,
  width: 397,
};

// export const fontSizes = {
//   title: 18,
//   subtitle: 12,
//   minititle: 10,
//   textInput: Dimensions.get('screen').height <= 650 ? 16 : 20,
// };

export const images = {
  SplashImg: require('../assets/splash.png'),
};

export const height = (
  Dimensions.get('screen').height *
  (1 / storyBoardDimensions.height)
).toFixed(2);

export const width = (
  Dimensions.get('screen').width *
  (1 / storyBoardDimensions.width)
).toFixed(2);
