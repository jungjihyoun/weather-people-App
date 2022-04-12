import styled, {css} from 'styled-components/native';

import {Text, SafeAreaView, Image, View} from 'react-native';

export const Container = styled(SafeAreaView)`
  justify-content: center;
  align-items: center;
  background-color: #262626;
  height: 100%;
  width: 100%;
`;

export const TextArea = styled(View)`
  width: 100% 
  flex: 1;
  justify-content:  flex-end;
  margin-left : 24px
`;

export const ImageArea = styled(View)`
  width: 100%;
  height: 100%;
  flex: 1;
  position: relative;
`;

export const TextWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${props => props.width || '194px'}
  height: 44px;
  background: #84e6b1;
  border-radius: 50px;
  margin-bottom: 14px;
`;

export const H1 = styled(Text)`
  font-family: 'YdestreetB';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -1.07135px;
`;

export const H2 = styled(Text)`
  font-family: 'SUIT-Bold';
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -1.07135px;
  color: #ffffff;
  margin-left: ${props => props && props.left};
`;

export const SplashImage = styled(Image)`
  position : absolute
  bottom : -7%
  right: 0
`;
