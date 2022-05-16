import React, {useState , useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {useSWRConfig} from 'swr'
import {launchImageLibrary} from 'react-native-image-picker';
import {CREATE_RECORD} from "@/graphql/Record";
import {IAsset, IMyOutfits} from '@/type/upload'
import TopSection from '../component/TopSection';
import UploadInputArea from '../component/UploadInputArea';
import {Container} from '../Upload.Styled';

const UploadContainer = () => {
  const { mutate } = useSWRConfig()

  const [photos , setPhotos] = useState<IAsset[]>([])
  const [title , setTitle] = useState('')
  const [content , setContent] = useState('')
  const [myOutfits , setMyOutfits] = useState<IMyOutfits>({coat : '' , top : '' , bottom : '' , score : null})

  const handleOpenGallery = () => {
    if (photos.length >= 3) {
      // TODO : toast message
      return 0
    }
    launchImageLibrary({mediaType : 'photo' , selectionLimit : 3 } ).then(data => {
      data.assets && data.assets.length && data.assets.map((e)=>{
        setPhotos([
          ...photos,
          ...data.assets!
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
                         photos={photos} setPhotos={setPhotos} onOpenGallery={handleOpenGallery}/>
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
