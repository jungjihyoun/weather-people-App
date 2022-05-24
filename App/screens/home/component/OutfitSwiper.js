import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {images} from '@/styles/globalStyles';
import AppSwiper from '@/component/AppSwiper';
import {
  OutfitColumn,
  Outfith1,
  Outfith2,
  OutfitImage,
  OutfitImgId,
  OutfitImgWrapper,
  OutfitRow,
  OutfitTextArea,
} from '../home.styled';
import useFetchRecord from '@/hooks/useFetchRecord';

const OutfitSwiper = () => {
  const {record} = useFetchRecord();
  const [currentIndex, setCurrentIndex] = useState(0);

  const swiperInner =
    record &&
    record.allRecord.map((data, index) => (
      <OutfitColumn>
        <OutfitImgWrapper>
          <Image
            source={{uri: data.image[0]}}
            style={{height: 275, width: 197}}
          />
          <OutfitImgId>@유저 아이디</OutfitImgId>
        </OutfitImgWrapper>

        {currentIndex === index && (
          <OutfitTextArea>
            <OutfitRow>
              <OutfitImage source={images.weather_sunny} />
              <View style={{width: 160}}>
                <Outfith1 numberOfLines={1} ellipsizeMode="tail">
                  {data.title}
                </Outfith1>
              </View>
            </OutfitRow>
            <Outfith2 ellipsizeMode="tail" numberOfLines={2}>
              {data.content}
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
