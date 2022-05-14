import React from 'react';
import {StyleSheet , View , Image , Text } from 'react-native'
import {TouchableWithoutFeedback} from "react-native-gesture-handler";
import {images} from "../../../styles/globalStyles";

const ImageSlides = ({photos , onOpenGallery}) => {
  console.log(photos)
  return (
    <View style={styles.slide} >
      <TouchableWithoutFeedback style={styles.imagePlusButton} onPress={() => onOpenGallery()}>
        <Image style={{width: 32 , height : 32}} source={images.camera}/>
        <Text style={styles.countText}>3/3</Text>
      </TouchableWithoutFeedback>
      {photos.length > 0 &&  photos.map((e , index)=> (
        <View style={styles.imageCard} >
        <Image key={index} resizeMode="stretch" style={styles.image} source={{uri: e.uri}}/>
      </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    display : 'flex',
    flexDirection : 'row',
    marginVertical: 16,
  },
  imagePlusButton:{
    display : 'flex',
    flexDirection : 'column',
    justifyContent: 'center',
    alignItems:'center',
    height: 78,
    width: 78,
    backgroundColor: '#F7F7F7',
    borderRadius: 8,
  },
  imageCard: {
    height: 78,
    width: 78,
    backgroundColor: '#F7F7F7',
    borderRadius: 8,
    marginRight: 10,
  },
  image: {
    height: 78,
    width: 78,
    borderRadius: 8,
  },
  countText: {
    fontFamily: fonts.suitB,
    fontSize: 12,
    textAlign: 'center',
    color: '#62B3FF',
  }
});



export default ImageSlides;
