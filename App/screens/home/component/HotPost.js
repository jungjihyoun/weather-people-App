import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
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
  OutfitRow,
  HotPostUserImage,
  HotPostContentTitle,
  HotPostContentId,
} from '../home.styled';

const HotPost = () => {
  return (
    <HotPostLayout>
      <HotPostTop>
        <PureColumn>
          <HotPostH1>인기 게시물</HotPostH1>
          <HotPostH2>현재 위치에서 인기있는 게시물이에요</HotPostH2>
        </PureColumn>
        <Image source={images.cloud} width={'84px'} />
      </HotPostTop>

      <Swiper showsButtons={false} showsPagination={true}>
        <>
          <HotPostContent>
            <HotPostContentTitle>1</HotPostContentTitle>

            <HotPostUserImage source={images.weather_sunny} />

            <PureColumn>
              <HotPostContentTitle ellipsizeMode="tail" numberOfLines={1}>
                게시글 제목 제목은 한줄 케이스로만 보여주기 보여주기 보여주기
              </HotPostContentTitle>
              <PureRow>
                <HotPostContentId>@유저아이디</HotPostContentId>
                <HotPostContentId>댓글수</HotPostContentId>
                <HotPostContentId>조아요수</HotPostContentId>
              </PureRow>
            </PureColumn>
          </HotPostContent>
          <HotPostContent>
            <HotPostContentTitle>1</HotPostContentTitle>

            <HotPostUserImage source={images.weather_sunny} />

            <PureColumn>
              <HotPostContentTitle ellipsizeMode="tail" numberOfLines={1}>
                게시글 제목 제목은 한줄 케이스로만 보여주기 보여주기 보여주기
              </HotPostContentTitle>
              <PureRow>
                <HotPostContentId>@유저아이디</HotPostContentId>
                <HotPostContentId>댓글수</HotPostContentId>
                <HotPostContentId>조아요수</HotPostContentId>
              </PureRow>
            </PureColumn>
          </HotPostContent>
          <HotPostContent>
            <HotPostContentTitle>1</HotPostContentTitle>

            <HotPostUserImage source={images.weather_sunny} />

            <PureColumn>
              <HotPostContentTitle ellipsizeMode="tail" numberOfLines={1}>
                게시글 제목 제목은 한줄 케이스로만 보여주기 보여주기 보여주기
              </HotPostContentTitle>
              <PureRow>
                <HotPostContentId>@유저아이디</HotPostContentId>
                <HotPostContentId>댓글수</HotPostContentId>
                <HotPostContentId>조아요수</HotPostContentId>
              </PureRow>
            </PureColumn>
          </HotPostContent>
        </>

        <HotPostContent>
          <HotPostContentTitle>1</HotPostContentTitle>

          <HotPostUserImage source={images.weather_sunny} />

          <PureColumn>
            <HotPostContentTitle ellipsizeMode="tail" numberOfLines={1}>
              게시글 제목 제목은 한줄 케이스로만 보여주기 보여주기 보여주기
            </HotPostContentTitle>
            <PureRow>
              <HotPostContentId>@유저아이디</HotPostContentId>
              <HotPostContentId>댓글수</HotPostContentId>
              <HotPostContentId>조아요수</HotPostContentId>
            </PureRow>
          </PureColumn>
        </HotPostContent>
      </Swiper>
    </HotPostLayout>
  );
};

export default HotPost;
