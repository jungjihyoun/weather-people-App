import React from 'react';
import {StyleSheet , View} from 'react-native'
import {images , fonts} from "@/styles/globalStyles";
import InputTitle from "@/component/InputTitle";
import WeatherTextInput from "@/component/WeatherTextInput";
import WeatherSelect from "@/component/WeatherSelect";
import WeatherTextArea from "@/component/WeatherTextArea";
import DetailRecord from "./DetailRecords";

const UploadInputArea = ({onSaveTitle , onSaveContent , onSaveOuter , onSaveTop , onSaveBottom , onSaveOutfit , myOutfits}) => {
  return (
    <View style={styles.UploadInputArea}>
      <InputTitle icon={images.location_icon} title="동네 설정"/>
      <WeatherSelect/>

      <InputTitle icon={images.write_icon} title="글쓰기"/>
      <WeatherTextInput onSaveTitle={onSaveTitle} />
      <WeatherTextArea onSaveContent={onSaveContent}/>

      <InputTitle icon={images.cloud_small} title="웨더 기록"/>
      <DetailRecord onSaveOuter={onSaveOuter} onSaveTop={onSaveTop} onSaveBottom={onSaveBottom} onSaveOutfit={onSaveOutfit} myOutfits={myOutfits}/>
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
