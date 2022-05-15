import React from 'react';
import {StyleSheet , View , Image , Text} from 'react-native'
import {TouchableWithoutFeedback , TouchableOpacity} from "react-native-gesture-handler";
import {images , fonts } from "@/styles/globalStyles";

const ImageSlides = ({photos , setPhotos , onOpenGallery}) => {
  const handleDeletePhoto = (uri) => {
    setPhotos(photos.filter((del)=>(del.uri !== uri)))
    console.log(uri)
  }

  return (
    <View style={styles.slide}>
      <TouchableWithoutFeedback style={styles.imagePlusButton} onPress={() => onOpenGallery()}>
        <Image style={{width: 32 , height : 32}} source={images.camera}/>
        <Text style={styles.countText}>{photos.length}/3</Text>
      </TouchableWithoutFeedback>

      {photos.length > 0 &&  photos.map((e , index)=> (
        <View style={styles.imageCard}>
          <Image key={index} resizeMode="stretch" style={styles.image} source={{uri: e.uri}}/>
          <View style={styles.deleteButton} >
            <TouchableWithoutFeedback style={{zIndex : 99 , width: 30 , height : 30}} onPress={() => {handleDeletePhoto(e.uri)}}>
              <Image style={{width: 16 , height : 16}} source={images.delete_icon}/>
            </TouchableWithoutFeedback>
          </View>
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
    marginRight: 10,
  },
  imageCard: {
    height: 80,
    width: 80,
    borderRadius: 8,
    marginRight: 10,
    position: 'relative'
  },
  image: {
    height: 78,
    width: 78,
    borderRadius: 8,
  },
  deleteButton:{
    justifyContent: 'center',
    alignItems: 'center',
    position : 'absolute',
    zIndex: 1,
    top: -7,
    right: -18,
  },
  countText: {
    fontFamily: fonts.suitB,
    fontSize: 12,
    textAlign: 'center',
    color: '#62B3FF',
  }
});



export default ImageSlides;
