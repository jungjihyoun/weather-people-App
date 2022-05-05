import React from 'react';
import {Text , StyleSheet , View} from 'react-native'
import Swiper from 'react-native-swiper';
import {images , fonts} from '../../../styles/globalStyles';
import {IconImage, TopLayout, ImageWrapper, IconText} from '../Upload.Styled';

const ImageSlides = () => {
  return (
    <View style={styles.slide}>
      <Swiper showsButtons={false} showsPagination={true}>
        <View style={styles.slide}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    backgroundColor: '#9DD6EB',
    height: 470
  },

  menu_title: {
    fontFamily: fonts.suitB,
    color: '#111111',
    textAlign: "center",
    fontSize: 18,
    fontWeight: '700',
    lineHeight:22,
  },
  menu_successBtn: {
    fontFamily: fonts.suitB,
    color: '#A5A5A5',
    textAlign: "center",
    fontSize: 18,
    fontWeight: '700',
    lineHeight:22,
  }
});



export default ImageSlides;
