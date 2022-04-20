import React, {useState} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {images} from '../../../styles/globalStyles';
import AppSwiper from '../../../component/AppSwiper';
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

const OutfitSwiper = () => {
  const dummyTest = [1, 2, 3, 4, 5];
  const [currentIndex, setCurrentIndex] = useState(0);

  const swiperInner = dummyTest.map((data, index) => (
    <OutfitColumn>
      <OutfitImgWrapper>
        <Image
          source={images.weather_sunny}
          style={{height: 275, width: 197, backgroundColor: 'pink'}}
        />
        <OutfitImgId>@유저 아이디</OutfitImgId>
      </OutfitImgWrapper>

      {currentIndex === index && (
        <OutfitTextArea>
          <OutfitRow>
            <OutfitImage source={images.weather_sunny} />
            <Outfith1>게시글 제목</Outfith1>
          </OutfitRow>
          <Outfith2 ellipsizeMode="tail" numberOfLines={2}>
            게시글 콘텐츠 게시글 콘텐츠게시글 콘텐츠게시글
            콘텐츠게시글콘텐츠게시글 보여주기는 최대 두 줄 ?
          </Outfith2>
        </OutfitTextArea>
      )}
    </OutfitColumn>
  ));

  return (
    <AppSwiper swiperItems={swiperInner} setCurrentIndex={setCurrentIndex} />
  );
};

export default OutfitSwiper;
