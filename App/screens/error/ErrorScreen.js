import React from 'react';
import {StyleSheet, Image , View, Text } from 'react-native';
import {fonts, images, colors} from "@/styles/globalStyles";
import {HotPostTop} from "@/screens/home/home.styled";

export const ErrorScreen = () => (
  <View style={styles.ErrorView}>
    <Text style={styles.ErrorTitle}>
      Comming Soon
    </Text>
    <Text style={styles.ErrorContent}>
      페이지 준비중입니다. 조금만 기다려 주세요!
    </Text>
    <Image  source={images.sorry_icon} style={{width: 200, height: 200 }} />
  </View>
)

const styles = StyleSheet.create({
  ErrorView: {
    backgroundColor: '#eeeeee',
    flex: 1,
    justifyContent: 'center',
    alignItems : 'center',
  },
  ErrorTitle: {
    fontFamily: fonts.suitB,
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 20,
    color : colors.prPink
  },
  ErrorContent: {
    fontFamily: fonts.suitB,
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 20,
    color : '#676767',
  },
});
