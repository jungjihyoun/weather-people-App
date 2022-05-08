import React from 'react';
import {StyleSheet , Text , Image} from 'react-native'
import {DetailInput} from '../Upload.Styled.js'
import {images , fonts} from "@/styles/globalStyles";
import {TouchableOpacity} from "react-native-gesture-handler";

const DetailRecordSelect = ({title}) => (
  <DetailInput>
    <Text style={styles.titleText}>{title}</Text>
    <TouchableOpacity>
      <Image style={styles.icon} source={images.face}/>
    </TouchableOpacity>
  </DetailInput>
)

const styles = StyleSheet.create({
  titleText: {
    fontFamily: fonts.suitB,
    fontWeight: '700',
    fontSize: 14,
    color: '#6F6F6F',
    textAlign:'center',
  },
  icon: {
    width: 48,
    height: 48
  }
});

export default DetailRecordSelect;
