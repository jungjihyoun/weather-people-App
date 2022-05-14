import React from 'react';
import {StyleSheet, Text} from 'react-native'
import DetailRecordText from './DetailRecordText'
import DetailRecordSelect from './DetailRecordSelect'
import {DetailInputArea, DetailRecordTitle, DetailRecordWrapper, HorizontalLine} from '../Upload.Styled.js'
import {fonts} from "../../../styles/globalStyles";

const DetailRecords = ({onSaveOutfit , myOutfits}) => {
  return (
    <DetailRecordWrapper>
      <DetailRecordTitle>
        <Text style={styles.titleText}>입은 옷 정보, 오늘 날씨와는 어땠는지 기록해볼까요?</Text>
      </DetailRecordTitle>

      <HorizontalLine />

      <DetailInputArea>
        <DetailRecordText title="외투" myOutfits={myOutfits} onSaveOutfits={e => onSaveOutfit((state) => ({...state , coat:e}))}/>
        <DetailRecordText title="상의" myOutfits={myOutfits} onSaveOutfits={e => onSaveOutfit((state) => ({...state , top:e}))}/>
        <DetailRecordText title="하의" myOutfits={myOutfits} onSaveOutfits={e => onSaveOutfit((state) => ({...state , bottom:e}))}/>
        <DetailRecordSelect title="내 평가" myOutfits={myOutfits} onSaveOutfits={e => onSaveOutfit((state) => ({...state , score:e}))}/>
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
