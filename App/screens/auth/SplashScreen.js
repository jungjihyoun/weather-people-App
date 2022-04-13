import React, {useEffect} from 'react';
import {images} from '../../styles/globalStyles';
import {
  Container,
  SplashImage,
  H1,
  H2,
  TextWrapper,
  TextArea,
  ImageArea,
} from './auth.styled';

const SplashScreen = ({navigation}) => {
  return (
    <Container>
      <TextArea>
        <TextWrapper width="227px">
          <H1>오늘 같은 날씨에</H1>
        </TextWrapper>
        <TextWrapper>
          <H1>다른 사람들은</H1>
        </TextWrapper>
        <TextWrapper>
          <H1>뭐 입고 있지?</H1>
        </TextWrapper>
        <H2 left="20px">Weather people!</H2>
      </TextArea>
      <ImageArea>
        <SplashImage source={images.SplashImg} />
      </ImageArea>
    </Container>
  );
};

export default SplashScreen;
