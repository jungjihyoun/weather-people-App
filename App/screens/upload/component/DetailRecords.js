import React from 'react';
import {StyleSheet , View , Text} from 'react-native'
import DetailRecordText from './DetailRecordText'
import DetailRecordSelect from './DetailRecordSelect'
import {DetailRecordWrapper , HorizontalLine , DetailInputArea , DetailRecordTitle , DetailInput} from '../Upload.Styled.js'
import {images , fonts} from "../../../styles/globalStyles";

const DetailRecords = () => {
  return (
    <DetailRecordWrapper>
      <DetailRecordTitle>
        <Text style={styles.titleText}>입은 옷 정보, 오늘 날씨와는 어땠는지 기록해볼까요?</Text>
      </DetailRecordTitle>

      <HorizontalLine />

      <DetailInputArea>
        <DetailRecordText title="외투"/>
        <DetailRecordText title="상의"/>
        <DetailRecordText title="하의"/>
        <DetailRecordSelect title="내 평가"/>
      </DetailInputArea>
    </DetailRecordWrapper>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontFamily: fonts.suitB,
    fontWeight: '400',
    fontSize: 14,
    color: '#A5A5A5',
  }
});



export default DetailRecords;
