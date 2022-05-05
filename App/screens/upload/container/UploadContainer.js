import React, {useEffect} from 'react';
import {View , Text, StyleSheet} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from 'react-native-geolocation-service';
import TopSection from '../component/TopSection';
import ImageSlides from '../component/ImageSlides';
import UploadInputArea from '../component/UploadInputArea';
import {Container} from '../Upload.Styled';
import {fonts, images} from "../../../styles/globalStyles";

const UploadContainer = () => {
  return (
    <>
      <TopSection />
      <Container>
        <ImageSlides />
        <UploadInputArea />
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },

});


export default UploadContainer;
