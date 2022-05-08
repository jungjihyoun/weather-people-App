import React from 'react';
import {StyleSheet , Text , TextInput , View} from 'react-native'
import {DetailInput} from '../Upload.Styled.js'
import {fonts} from "@/styles/globalStyles";

const DetailRecordText = ({title}) => (
  <DetailInput>
    <Text style={styles.titleText}>{title}</Text>
    <View  style={styles.alignWrapper}>
      <TextInput style={styles.inputText} placeholder="입력"/>
    </View>
  </DetailInput>
)

const styles = StyleSheet.create({
  alignWrapper: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    height: 48,
  },
  titleText: {
    fontFamily: fonts.suitB,
    fontWeight: '700',
    fontSize: 14,
    color: '#6F6F6F',
  },
  inputText: {
    fontFamily: fonts.suitB,
    fontWeight: '700',
    fontSize: 12,
    color: '#111111',
  }
});

export default DetailRecordText;
