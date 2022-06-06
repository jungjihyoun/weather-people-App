import React from 'react';
import {Image, StyleSheet, Text , View} from 'react-native';
import {fonts, images} from '@/styles/globalStyles';
import { FeedContent, FeedImage, FeedTitleRow, ScrollContainer ,WeatherButton} from '../Feed.Styled'

interface IProps {
  title : string,
  content : string,
  image ?: string
}

const Feed = ({title , content , image }:IProps) => {
  return (
    <ScrollContainer>
      <FeedTitleRow>
        <Image source={images.SplashImg} style={{width:34, height: 34 , borderRadius :  50, borderWidth: 1 , borderColor: '62B3FF' , marginRight : 8}} />
        <Text style={styles['id_Text']}>@jihyoun_0602</Text>
      </FeedTitleRow>

      <View style={{position:'relative'}}>
        <FeedImage source={{uri: image}}/>
        <WeatherButton>
          <Image source={images.cloud_small} style={{width: 24, height: 24 }} />
        </WeatherButton>
      </View>

      <FeedContent>
        <Text style={styles['feed_title']}>{title}</Text>
        <Text style={styles['feed_content']}>{content}</Text>
      </FeedContent>


      <FeedTitleRow>
        <Image source={images.like_icon} style={{width: 21, height: 21 , marginRight: 8 }} />
        <Image source={images.chat_icon} style={{width: 21, height: 21 , marginRight: 8}} />
        <Text style={styles['feed_content']}>좋아요 1개·댓글 10개 모두 보기</Text>
      </FeedTitleRow>


    </ScrollContainer>

  )
};

const styles = StyleSheet.create({
  id_Text: {
    fontFamily: fonts.suitM,
    fontWeight: '700',
    fontSize : 14,
},
  feed_title: {
    fontFamily: fonts.suitM,
    fontWeight: '700',
    fontSize : 15,
    paddingBottom: 10,
  },
  feed_content: {
    fontFamily: fonts.suitM,
    fontWeight: '400',
    fontSize : 14,
    color: '#6F6F6F',
  },
});


export default Feed;

