import React from 'react';
import {StyleSheet , View} from 'react-native'
import InputTitle from "../../../component/InputTitle";
import WeatherTextInput from "../../../component/WeatherTextInput";
import WeatherSelect from "../../../component/WeatherSelect";
import WeatherTextArea from "../../../component/WeatherTextArea";
import {images , fonts} from "../../../styles/globalStyles";

const UploadInputArea = ({children}) => {
  return (
    <View style={styles.UploadInputArea}>
      <InputTitle icon={images.location_icon} title="동네 설정"/>
      <WeatherSelect/>

      <InputTitle icon={images.write_icon} title="글쓰기"/>
      <WeatherTextInput/>
      <WeatherTextArea/>

      <InputTitle icon={images.cloud_small} title="웨더 기록"/>
    </View>
  );
};

const styles = StyleSheet.create({
  UploadInputArea: {
    marginHorizontal: 17,
    marginBottom: 100,
  }
});



export default UploadInputArea;
