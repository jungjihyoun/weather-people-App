import React, {useRef, useState, useEffect, useLayoutEffect} from 'react';
import {
  View,
  TextInput,
  Image, StyleSheet,
} from 'react-native';
import {width, height , fonts} from '../styles/globalStyles';

const WeatherTextInput = ({onSaveTitle}) => {
  return (
    <TextInput style={styles.TextInputWrapper}
               placeholder="제목을 입력해 주세요"
               onChangeText={onSaveTitle}
    />
  );
};

const styles = StyleSheet.create({
  TextInputWrapper: {
    backgroundColor: '#F7F7F7',
    borderRadius : 8,
    width: width * 343,
    height: 52,
    marginBottom: 10,
    paddingHorizontal:17,
    paddingVertical:8,

    fontFamily: fonts.suitB,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
  },
});

export default WeatherTextInput;

