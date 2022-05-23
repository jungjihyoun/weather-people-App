import React, {Dispatch, SetStateAction} from 'react';
import {StyleSheet, View} from 'react-native';
import InputTitle from '@/component/InputTitle';
import WeatherTextInput from '@/component/WeatherTextInput';
import WeatherSelect from '@/component/WeatherSelect';
import WeatherTextArea from '@/component/WeatherTextArea';
import DetailRecord from './DetailRecords';
import ImageSlides from './ImageSlides';
import {images} from '@/styles/globalStyles';
import {IAsset, IMyOutfits} from '@/type/upload';

interface IPros {
  myOutfits: IMyOutfits | null;
  photos: IAsset[];
  title: string;
  content: string;
  onOpenGallery: () => void;
  onDeletePhoto: (uri: string) => void;
  onSaveTitle: Dispatch<SetStateAction<string>>;
  onSaveContent: Dispatch<SetStateAction<string>>;
  onSaveMyOutfits: Dispatch<SetStateAction<IMyOutfits | null>>;
}

const UploadInputArea = ({
  title,
  content,
  myOutfits,
  photos,
  onSaveTitle,
  onSaveContent,
  onSaveMyOutfits,
  onOpenGallery,
  onDeletePhoto,
}: IPros) => {
  return (
    <View style={styles.UploadInputArea}>
      <InputTitle icon={images.location_icon} title="현재 위치" />
      <WeatherSelect />

      <InputTitle icon={images.write_icon} title="글쓰기" />
      <ImageSlides
        photos={photos}
        onOpenGallery={onOpenGallery}
        onDeletePhoto={onDeletePhoto}
      />

      <WeatherTextInput onSaveTitle={onSaveTitle} value={title} />
      <WeatherTextArea onSaveContent={onSaveContent} value={content} />

      <InputTitle icon={images.cloud_small} title="웨더 기록" />
      <DetailRecord onSaveMyOutfits={onSaveMyOutfits} myOutfits={myOutfits} />
    </View>
  );
};

const styles = StyleSheet.create({
  UploadInputArea: {
    marginHorizontal: 17,
    marginBottom: 20,
  },
});

export default UploadInputArea;
