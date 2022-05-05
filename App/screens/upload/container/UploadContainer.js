import React, {useEffect , useState} from 'react';
import {View , Text, StyleSheet , TouchableWithoutFeedback} from 'react-native';
import { launchImageLibrary} from 'react-native-image-picker';
import TopSection from '../component/TopSection';
import ImageSlides from '../component/ImageSlides';
import UploadInputArea from '../component/UploadInputArea';
import {Container} from '../Upload.Styled';

const UploadContainer = () => {
  const [photos , setPhotos] = useState([])

  const handleOpenGallery = () => {
    setPhotos([])

    launchImageLibrary({selectionLimit : 0 , saveToPhotos : false}).then(data => {
      data.assets.length && data.assets.map((e)=>{
        setPhotos([
          ...photos,
          {
            uri: e.uri,
            type: e.type,
            name: e.fileName,
          }
        ]);
      })
    })
  }

  useEffect(() => {
    handleOpenGallery()
  } , [])

  return (
    <>
      <TopSection />
      <Container>
        <ImageSlides photos={photos} onOpenGallery={handleOpenGallery}/>
        <UploadInputArea />
        <TouchableWithoutFeedback onPress={()=> handleOpenGallery()}>
          <Text>testOpenClick</Text>
        </TouchableWithoutFeedback>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },

});


export default UploadContainer;
