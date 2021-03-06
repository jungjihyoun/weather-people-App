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

export const basicDimensions = {
  height: 812,
  width: 375,
};

// export const fontSizes = {
//   title: 18,
//   subtitle: 12,
//   minititle: 10,
//   textInput: Dimensions.get('screen').height <= 650 ? 16 : 20,
// };

export const images = {
  SplashImg: require('../assets/splash.png'),
  sun_big: require('../assets/sun_B.png'),
  Kakao: require('../assets/Kakao.png'),
  Google: require('../assets/Google.png'),
  Naver: require('../assets/Naver.png'),
  facebook: require('../assets/facebook.png'),
  alarm: require('../assets/al.png'),
  search: require('../assets/Search.png'),
  right: require('../assets/right.png'),
  sort: require('../assets/Sort.png'),
  weather_sunny: require('../assets/weather_sunny.png'),
  cloud: require('../assets/cloud.png'),
  cloud_small: require('../assets/cloud_small_icon.png'),
  location_icon: require('../assets/location_icon.png'),
  location_icon_small: require('../assets/location_icon_small.png'),
  write_icon: require('../assets/write_icon.png'),
  face: require('../assets/face.png'),
  face_soso: require('../assets/face-soso.png'),
  face_good: require('../assets/face-good.png'),
  face_bad: require('../assets/face-bad.png'),
  camera: require('../assets/camera.png'),
  delete_icon: require('../assets/delete_icon.png'),
  close_icon: require('../assets/close.png'),
  sorry_icon: require('../assets/sorry.png'),
  rainbow_cloud: require('../assets/rainbow_cloud.png'),
  chat_icon: require('../assets/chat_icon.png'),
  like_icon: require('../assets/like_icon.png'),
};

export const height = (
  Dimensions.get('screen').height *
  (1 / basicDimensions.height)
).toFixed(2);

export const width = (
  Dimensions.get('screen').width *
  (1 / basicDimensions.width)
).toFixed(2);
