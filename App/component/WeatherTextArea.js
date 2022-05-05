import React, {useRef, useState, useEffect, useLayoutEffect} from 'react';
import {
  View,
  TextInput,
  Image, StyleSheet,
} from 'react-native';
import {width, height , fonts} from '../styles/globalStyles';

const WeatherTextArea = () => {
  return (
    <TextInput style={styles.WeatherTextArea} multiline={true}
               placeholder="오늘 날씨이야기나 입고 나간 옷에 대한 의견도 좋아요 :)"/>

  );
};

const styles = StyleSheet.create({
  WeatherTextArea: {
    backgroundColor: '#F7F7F7',
    borderRadius : 8,
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

