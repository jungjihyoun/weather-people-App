import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {fonts, width} from '@/styles/globalStyles';

const WeatherTextInput = ({value, onSaveTitle}) => {
  return (
    <TextInput
      style={styles.TextInputWrapper}
      placeholder="제목을 입력해 주세요"
      onChangeText={onSaveTitle}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  TextInputWrapper: {
    backgroundColor: '#F7F7F7',
    borderRadius: 8,
    width: width * 343,
    height: 52,
    marginBottom: 10,
    paddingHorizontal: 17,
    paddingVertical: 8,

    fontFamily: fonts.suitB,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
  },
});

export default WeatherTextInput;
