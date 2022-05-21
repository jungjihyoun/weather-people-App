import React, {useState, useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSWRConfig} from 'swr';
import {launchImageLibrary} from 'react-native-image-picker';
import {CREATE_RECORD, UPDATE_IMAGE} from '@/graphql/Record';
import {IAsset, IMyOutfits} from '@/type/upload';
import TopSection from '../component/TopSection';
import UploadInputArea from '../component/UploadInputArea';
import {Container} from '../Upload.Styled';

const UploadContainer = () => {
  const {mutate} = useSWRConfig();

  const [photos, setPhotos] = useState<IAsset[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [myOutfits, setMyOutfits] = useState<IMyOutfits>({
    coat: '',
    top: '',
    bottom: '',
    score: null,
  });
  const [image, setImage] = useState<any>([]);

  const handleOpenGallery = () => {
    if (photos.length >= 3) {
      // TODO : toast message
      return 0;
    }
    launchImageLibrary({mediaType: 'photo', selectionLimit: 3}).then(data => {
      data.assets &&
        data.assets.length &&
        data.assets.map(e => {
          setPhotos([...photos, ...data.assets!]);

          setImage((state: any) => [
            ...state,
            {
              uri: e.uri,
              type: e.type,
              name: e.fileName,
            },
          ]);
        });
    });
  };

  const handlePostImage = async (id: string) => {
    var formData = new FormData();
    if (image !== []) {
      image.map(e => {
        formData.append('file', e);
      });
    }
    let response = await fetch('http://localhost:3000/image', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });
    if (response.ok) {
      let locations = await response.text();
      console.log(locations);
      await fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: UPDATE_IMAGE(id, locations),
          variables: {
            now: new Date().toISOString(),
          },
        }),
      }).then(res => res.json());
    } else {
      console.log(response);
    }
  };

  const handlePostRecord = async () => {
    await fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: CREATE_RECORD(title, content, myOutfits),
        variables: {
          now: new Date().toISOString(),
        },
      }),
    })
      .then(res => res.json())
      .then(result => handlePostImage(result.data.createRecord._id));
  };

  useEffect(() => {
    handleOpenGallery();
  }, []);

  return (
    <>
      <TopSection onPostRecord={handlePostRecord} />
      <Container>
        <UploadInputArea
          onSaveTitle={setTitle}
          onSaveContent={setContent}
          onSaveOutfit={setMyOutfits}
          myOutfits={myOutfits}
          photos={photos}
          setPhotos={setPhotos}
          onOpenGallery={handleOpenGallery}
        />
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
