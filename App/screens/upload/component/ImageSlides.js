import React from 'react';
import {StyleSheet , View , Image} from 'react-native'
import Swiper from 'react-native-swiper';

const ImageSlides = ({photos , onOpenGallery}) => {
  return (
    <View onPress={() => onOpenGallery()} style={styles.slide} >
      <Swiper showsButtons={false} showsPagination={true}>
          {
            photos.length > 0 ?
              photos.map((e , index)=>{
                return <Image key={index} resizeMode="stretch" style={styles.ImageWrapper} source={{uri: e.uri}}/>
              }) : <View />
          }
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    backgroundColor: '#9DD6EB',
    height: 470
  },
  ImageWrapper: {
    height: 470
  },
  menu_title: {
    // fontFamily: fonts.suitB,
    color: '#111111',
    textAlign: "center",
    fontSize: 18,
    fontWeight: '700',
    lineHeight:22,
  },
  menu_successBtn: {
    // fontFamily: fonts.suitB,
    color: '#A5A5A5',
    textAlign: "center",
    fontSize: 18,
    fontWeight: '700',
    lineHeight:22,
  }
});



export default ImageSlides;
