import React from 'react';
import {Text, View, Image} from 'react-native';
import {images} from '../../../styles/globalStyles';
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
} from '../home.styled';

const OutfitPhotos = () => {
  return (
    <OutfitPhotosLayout>
      <OutfitSubTitle>“밖에 사람들은 뭐 입고 있지?”</OutfitSubTitle>
      <OutfitBorder>
        <OutfitTitle>우리동네 웨더피플</OutfitTitle>
      </OutfitBorder>
      <View style={{height: 275, width: 197, backgroundColor: 'red'}}></View>
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
    </OutfitPhotosLayout>
  );
};

export default OutfitPhotos;
