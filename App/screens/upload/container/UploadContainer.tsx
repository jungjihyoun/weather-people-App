import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {CREATE_RECORD, UPDATE_IMAGE} from '@/graphql/Record';
import {IAsset, IMyOutfits} from '@/type/upload';
import TopSection from '../component/TopSection';
import UploadInputArea from '../component/UploadInputArea';
import WeatherPopup from '@/component/WeatherPopup';
import {Container} from '../Upload.Styled';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type mainScreenProp = StackNavigationProp<any>;

const UploadContainer = () => {
  const navigation = useNavigation<mainScreenProp>();
  const [isFullFill, setIsFullFill] = useState(false);
  const [photos, setPhotos] = useState<IAsset[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [myOutfits, setMyOutfits] = useState<IMyOutfits | null>({
    coat: '',
    top: '',
    bottom: '',
    score: null,
  });
  const [popup, setPopup] = useState(false);
  const [message, setMessage] = useState('');

  // useEffect(() => {
  //   handleOpenGallery();
  // }, []);

  useEffect(() => {
    if (photos.length && title !== '' && content != '') {
      setIsFullFill(true);
    } else {
      setIsFullFill(false);
    }
  }, [photos, title, content]);

  const handleOpenGallery = () => {
    if (photos.length >= 3) {
      setMessage('최대 3장까지 업로드 할 수 있습니다.');
      setPopup(true);
      return 0;
    }
    launchImageLibrary({mediaType: 'photo', selectionLimit: 3}).then(data => {
      data.assets &&
      data.assets.length &&
      data.assets.map(e => {
        setPhotos((state: any) => [
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

  const handleDeletePhoto = (uri: string) => {
    setPhotos(photos.filter(del => del.uri !== uri));
  };

  const handlePostImage = async (id: string) => {
    var formData = new FormData();
    if (photos !== []) {
      photos.map(e => {
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
    if (!isFullFill) {
      setMessage('필수 입력 양식을 채워주세요.');
      setPopup(true);
      return;
    }

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
      .then(result => handlePostImage(result.data.createRecord._id))
      .then(() => {
        setPhotos(prev => []);
        setTitle(prev => '');
        setContent(prev => '');
        setMyOutfits(prev => {
          return {
            coat: '',
            top: '',
            bottom: '',
            score: null,
          };
        });

        navigation.navigate('FeedScreen');
      });
  };

  // const alert = () => {
  //   Alert.alert('웨더피플', '업로드 하시겠습니까?');
  // };

  return (
    <>
      <TopSection isFullFill={isFullFill} onPostRecord={handlePostRecord} />
      <Container>
        <UploadInputArea
          title={title}
          content={content}
          onSaveTitle={setTitle}
          onSaveContent={setContent}
          onSaveMyOutfits={setMyOutfits}
          myOutfits={myOutfits}
          photos={photos}
          onOpenGallery={handleOpenGallery}
          onDeletePhoto={handleDeletePhoto}
        />
      </Container>

      <WeatherPopup message={message} popup={popup} setPopup={setPopup} />
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
