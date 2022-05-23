import React, {useState} from 'react';
import {Image, Modal, StyleSheet, Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import ImageViewer from 'react-native-image-zoom-viewer';
import {fonts, images} from '@/styles/globalStyles';

const ImageSlides = ({photos, onOpenGallery, onDeletePhoto}) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.slide}>
      <TouchableWithoutFeedback
        style={styles.imagePlusButton}
        onPress={() => onOpenGallery()}>
        <Image style={{width: 32, height: 32}} source={images.camera} />
        <Text style={styles.countText}>{photos.length}/3</Text>
      </TouchableWithoutFeedback>

      {photos.length > 0 &&
        photos.map((e, index) => (
          <TouchableWithoutFeedback
            onPress={() => setVisible(true)}
            style={styles.imageCard}
            key={index}>
            <Image
              key={index}
              resizeMode="stretch"
              style={styles.image}
              source={{uri: e.uri}}
            />
            <View style={styles.deleteButton}>
              <TouchableWithoutFeedback
                style={{zIndex: 99, width: 30, height: 30}}
                onPress={() => {
                  onDeletePhoto(e.uri);
                }}>
                <Image
                  style={{width: 16, height: 16}}
                  source={images.delete_icon}
                />
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        ))}
      <Modal visible={visible} transparent={true}>
        <ImageViewer
          imageUrls={photos.map(e => {
            return {url: e.uri};
          })}
          enableSwipeDown={true}
          onSwipeDown={() => setVisible(false)}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 16,
  },
  imagePlusButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
    position: 'relative',
  },
  image: {
    height: 78,
    width: 78,
    borderRadius: 8,
  },
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    top: -7,
    right: -18,
  },
  countText: {
    fontFamily: fonts.suitB,
    fontSize: 12,
    textAlign: 'center',
    color: '#62B3FF',
  },
});

export default ImageSlides;
