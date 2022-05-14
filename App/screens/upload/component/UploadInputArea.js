import React from 'react';
import {StyleSheet, View} from 'react-native'
import {images} from "@/styles/globalStyles";
import InputTitle from "@/component/InputTitle";
import WeatherTextInput from "@/component/WeatherTextInput";
import WeatherSelect from "@/component/WeatherSelect";
import WeatherTextArea from "@/component/WeatherTextArea";
import DetailRecord from "./DetailRecords";
import ImageSlides from "./ImageSlides";
import {Container} from "../Upload.Styled";

const UploadInputArea = ({onSaveTitle , onSaveContent , onSaveOutfit , myOutfits , photos , onOpenGallery}) => {
  return (
    <View style={styles.UploadInputArea}>
      <InputTitle icon={images.location_icon} title="현재 위치"/>
      <WeatherSelect/>

      <InputTitle icon={images.write_icon} title="글쓰기"/>
      <ImageSlides photos={photos} onOpenGallery={onOpenGallery}/>

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
