import styled, {css} from 'styled-components/native';
import {Text, SafeAreaView, Image, View} from 'react-native';
import {colors, height, width, fonts} from '../../styles/globalStyles';

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

// LoginScreen
export const LoginContainer = styled(SafeAreaView)`
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
export const LoginImageArea = styled(View)`
  width: 100%;
  height: 100%;
  flex: 1.3;
  position: relative;
`;
export const LoginImage = styled(Image)`
  max-width: ${width * 335}px;
  max-height: ${height * 440}px;
  position: absolute;
  right: 0;
`;
export const LoginLogoArea = styled(View)`
  width: 100%;
  height: 100%;
  flex: 0.5;
  align-items: center;
`;

export const SocialLoginArea = styled(View)`
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content : space-evenly
  padding: 0 20px;
  margin-top : 30px;
`;

export const SocialImage = styled(Image)`
  width: 48px;
  height: 48px;
`;
export const SignUpArea = styled(View)`
  width: 100%;
  height: 100%;
  flex: 0.4;
  align-items: center;
`;

export const Logo = styled(Text)`
  background: #262626;
  border-radius: 18px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 6px 20px;
  width: 183px
  height: 35px;
  color : white;
  font-family: ${fonts.suitB};
  font-weight: 800;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.506818px;
  overflow:hidden;
  margin-bottom: 12px;
`;

export const H5 = styled(Text)`
  font-family: ${fonts.suitB};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.4px;
  color: #111111;
`;
