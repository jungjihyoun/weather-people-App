import React, {useState , useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import TopSection from '../component/TopSection';
import ImageSlides from '../component/ImageSlides';
import UploadInputArea from '../component/UploadInputArea';
import {Container} from '../Upload.Styled';
import {useSWRConfig} from 'swr'
import {CREATE_RECORD} from "../../../graphql/Record";

const UploadContainer = () => {
  const { mutate } = useSWRConfig()

  const [photos , setPhotos] = useState([])
  const [title , setTitle] = useState('')
  const [content , setContent] = useState('')
  const [myOutfits , setMyOutfits] = useState({coat : '' , top : '' , bottom : '' , score : null})

  const handleOpenGallery = () => {
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
    fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: CREATE_RECORD( title , content , myOutfits),
        variables: {
          now: new Date().toISOString(),
        },
      }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  }

  useEffect(() => {
    handleOpenGallery()
  } , [])

  return (
    <>
      <TopSection onPostRecord={handlePostRecord}/>
      <Container>
        <UploadInputArea onSaveTitle={setTitle} onSaveContent={setContent}
                         onSaveOutfit={setMyOutfits} myOutfits={myOutfits}
                         photos={photos} onOpenGallery={handleOpenGallery}/>
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
