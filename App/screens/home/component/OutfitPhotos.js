import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {images} from '../../../styles/globalStyles';
import AppSwiper from '../../../component/AppSwiper';
import OutfitSwiper from './OutfitSwiper';
import {
  OutfitPhotosLayout,
  OutfitTitle,
  OutfitBorder,
  OutfitSubTitle,
  OutfitTextArea,
  Outfith1,
  Outfith2,
  OutfitImage,
  OutfitRow,
  OutfitColumn,
  OutfitImgWrapper,
  OutfitImgId,
} from '../home.styled';

const OutfitPhotos = () => {
  return (
    <OutfitPhotosLayout>
      <OutfitSubTitle>“밖에 사람들은 뭐 입고 있지?”</OutfitSubTitle>
      <OutfitBorder>
        <OutfitTitle>우리동네 웨더피플</OutfitTitle>
      </OutfitBorder>

      <OutfitSwiper />
    </OutfitPhotosLayout>
  );
};

export default OutfitPhotos;

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
});
