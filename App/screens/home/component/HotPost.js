import React from 'react';
import {Image, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {images} from '../../../styles/globalStyles';

import {
  HotPostLayout,
  HotPostH1,
  HotPostH2,
  HotPostTop,
  PureRow,
  PureColumn,
  HotPostContent,
  HotPostUserImage,
  HotPostContentTitle,
  HotPostContentId,
} from '../home.styled';
import useFetchRecord from '../../../hooks/userFetchRecord';

const HotPost = () => {
  const {record, recordLoading} = useFetchRecord();

  // TODO : 컴포넌트 분리
  const swiperInner = () => {
    let pivot = 0;
    return record.allRecord.map((e, index) => {
      if (pivot < record.allRecord.length) {
        pivot += 4;
        return (
          <View key={`currentPost-group-${index}`}>
            {record.allRecord.map((e, index) => {
              if (pivot - 4 <= index && index < pivot) {
                return (
                  <HotPostContent key={`currentPost-${index}`}>
                    <HotPostContentTitle>{index + 1}</HotPostContentTitle>

                    <HotPostUserImage source={images.weather_sunny} />

                    <PureColumn>
                      <HotPostContentTitle
                        ellipsizeMode="tail"
                        numberOfLines={1}>
                        {e.title}
                      </HotPostContentTitle>
                      <PureRow>
                        <HotPostContentId>@유저아이디</HotPostContentId>
                        <HotPostContentId>댓글수</HotPostContentId>
                        <HotPostContentId>좋아요수</HotPostContentId>
                      </PureRow>
                    </PureColumn>
                  </HotPostContent>
                );
              }
            })}
          </View>
        );
      }
    });
  };

  return (
    <HotPostLayout>
      <HotPostTop>
        <PureColumn>
          <HotPostH1>최신 게시물</HotPostH1>
          <HotPostH2>현재 위치에서 방금 올라온 게시물이에요</HotPostH2>
        </PureColumn>
        <Image source={images.cloud} width={'84px'} />
      </HotPostTop>

      {record && (
        <Swiper showsButtons={false} showsPagination={true}>
          {swiperInner()}
        </Swiper>
      )}
    </HotPostLayout>
  );
};

export default HotPost;
