import React, {useEffect , useState} from 'react';
import {View , Text, StyleSheet , TouchableWithoutFeedback} from 'react-native';
import { launchImageLibrary} from 'react-native-image-picker';
import usePostRecord from '../../../hooks/usePostRecord'
import TopSection from '../component/TopSection';
import ImageSlides from '../component/ImageSlides';
import UploadInputArea from '../component/UploadInputArea';
import {Container} from '../Upload.Styled';
import useSWR, { useSWRConfig } from 'swr'
import {CREATE_RECORD} from "../../../graphql/Record";
import {graphqlFetcher} from "../../../utils/fetcher";

const UploadContainer = () => {
  const { mutate } = useSWRConfig()

  const [photos , setPhotos] = useState([])
  const [title , setTitle] = useState('')
  const [content , setContent] = useState('')
  const [outer , setOuter] = useState('')
  const [top , setTop] = useState('')
  const [bottom , setBottom] = useState('')
  const [myOutfits , setMyOutfits] = useState(null)

  console.log(title, content, outer , top , bottom , myOutfits)

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

  const handlePostRecord = () => {
    mutate(CREATE_RECORD({title: "qwe", content: "테스트 qweqwe"}),graphqlFetcher);
  }

  // useEffect(() => {
  //   handleOpenGallery()
  // } , [])

  return (
    <>
      <TopSection onPostRecord={handlePostRecord}/>
      <Container>
        <ImageSlides photos={photos} onOpenGallery={handleOpenGallery}/>
        <UploadInputArea onSaveTitle={setTitle} onSaveContent={setContent}
                         onSaveOuter={setOuter} onSaveTop={setTop} onSaveBottom={setBottom} onSaveOutfit={setMyOutfits} myOutfits={myOutfits}/>

        {/*<TouchableWithoutFeedback onPress={()=> handleOpenGallery()}>*/}
        {/*  <Text>testOpenClick</Text>*/}
        {/*</TouchableWithoutFeedback>*/}
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
