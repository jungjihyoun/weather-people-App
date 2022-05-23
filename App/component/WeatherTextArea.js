import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {fonts, width} from '@/styles/globalStyles';

const WeatherTextArea = ({value, onSaveContent}) => {
  return (
    <TextInput
      style={styles.WeatherTextArea}
      multiline={true}
      placeholder="오늘 날씨이야기나 입고 나간 옷에 대한 의견도 좋아요 :)"
      onChangeText={onSaveContent}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  WeatherTextArea: {
    backgroundColor: '#F7F7F7',
    borderRadius: 8,
    width: width * 343,
    height: 147,
    paddingTop: 17,
    paddingBottom: 17,
    paddingLeft: 9,
    paddingRight: 9,

    fontFamily: fonts.suitB,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
  },
});

export default WeatherTextArea;
