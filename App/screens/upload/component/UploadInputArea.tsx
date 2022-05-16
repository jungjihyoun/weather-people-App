import React, {Dispatch, SetStateAction} from 'react';
import {StyleSheet, View} from 'react-native'
import InputTitle from "@/component/InputTitle";
import WeatherTextInput from "@/component/WeatherTextInput";
import WeatherSelect from "@/component/WeatherSelect";
import WeatherTextArea from "@/component/WeatherTextArea";
import DetailRecord from "./DetailRecords";
import ImageSlides from "./ImageSlides";
import {images} from "@/styles/globalStyles";
import {IAsset , IMyOutfits} from '@/type/upload'

interface IPros {
  myOutfits:  IMyOutfits,
  photos : IAsset[],
  onOpenGallery : () => void,
  setPhotos : Dispatch<SetStateAction<IAsset[]>>,
  onSaveTitle: Dispatch<SetStateAction<string>> ,
  onSaveContent: Dispatch<SetStateAction<string>>,
  onSaveOutfit: Dispatch<SetStateAction<IMyOutfits>>,
}

const UploadInputArea = ({onSaveTitle , onSaveContent , onSaveOutfit , myOutfits , photos , onOpenGallery ,setPhotos} : IPros) => {
  return (
    <View style={styles.UploadInputArea}>
      <InputTitle icon={images.location_icon} title="현재 위치"/>
      <WeatherSelect/>

      <InputTitle icon={images.write_icon} title="글쓰기"/>
      <ImageSlides photos={photos} setPhotos={setPhotos} onOpenGallery={onOpenGallery}/>

      <WeatherTextInput onSaveTitle={onSaveTitle} />
      <WeatherTextArea onSaveContent={onSaveContent}/>

      <InputTitle icon={images.cloud_small} title="웨더 기록"/>
      <DetailRecord onSaveOutfit={onSaveOutfit} myOutfits={myOutfits}/>
    </View>
  );
};

const styles = StyleSheet.create({
  UploadInputArea: {
    marginHorizontal: 17,
    marginBottom: 20,
  }
});



export default UploadInputArea;
