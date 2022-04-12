import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  LoginContainer,
  LoginImageArea,
  LoginImage,
  LoginLogoArea,
  SocialLoginArea,
  SignUpArea,
  SocialImage,
  Logo,
  H5,
} from '../auth.styled';
import {images} from '../../../styles/globalStyles';

const LoginDashBoard = ({navigation}) => {
  return (
    <LoginContainer style={{marginTop: 50}}>
      <LoginImageArea>
        <LoginImage source={images.sun_big} />
      </LoginImageArea>

      <LoginLogoArea>
        <Logo>Weather People!</Logo>
        <H5>SNS계정으로 간편 가입하기</H5>
        <SocialLoginArea>
          <SocialImage source={images.Kakao} />
          <SocialImage source={images.Google} />
          <SocialImage source={images.Naver} />
          <SocialImage source={images.facebook} />
        </SocialLoginArea>
      </LoginLogoArea>

      <SignUpArea>
        <Text>회원가입</Text>
      </SignUpArea>
    </LoginContainer>
  );
};

export default LoginDashBoard;
