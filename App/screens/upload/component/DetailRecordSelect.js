import React, { useState, useEffect, useRef } from 'react';
import {StyleSheet , Text , Image , View } from 'react-native'
import {TouchableOpacity} from "react-native-gesture-handler";
import WeatherModal from '@/component/WeatherModal'
import {DetailInputArea, DetailInput , DetailSelectWrapper , CloseHorizontal} from '../Upload.Styled.js'
import {images , fonts , height , colors} from "@/styles/globalStyles";

const DetailRecordSelect = ({title}) => {
  const [isModalOpen , setIsModalOpen] = useState(false);

  return (
    <>
      <DetailInput>
        <Text style={styles.titleText}>{title}</Text>
        <TouchableOpacity onPress={()=>setIsModalOpen(true)}>
          <Image style={styles.icon} source={images.face}/>
        </TouchableOpacity>
      </DetailInput>


      <WeatherModal isModalOpen={isModalOpen} onSetModal={setIsModalOpen}>
        <View style={styles.bottomSheetContainer}>
          <CloseHorizontal />
          <Text style={styles.selectTitle}>오늘 날씨와 내 아웃핏은?</Text>

          <DetailInputArea>
            <DetailSelectWrapper>
              <Image style={styles.icon} source={images.face_bad}/>
              <View style={styles.choiceLook}><Text style={styles.choiceText}>별로예요</Text></View>
            </DetailSelectWrapper>

            <DetailSelectWrapper>
              <Image style={styles.icon} source={images.face_soso}/>
              <View style={styles.choiceLook}><Text style={styles.choiceText}>보통이에요</Text></View>
            </DetailSelectWrapper>

            <DetailSelectWrapper>
              <Image style={styles.icon} source={images.face_good}/>
              <View style={styles.choiceLook}><Text style={styles.choiceText}>완전 찰떡!</Text></View>
            </DetailSelectWrapper>
          </DetailInputArea>

        </View>
      </WeatherModal>
    </>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontFamily: fonts.YdeB,
    fontWeight: '400',
    fontSize: 14,
    color: '#6F6F6F',
    textAlign:'center',
  },
  selectTitle: {
    fontFamily: fonts.YdeB,
    fontWeight: '700',
    fontSize: 16,
    color: '#000000',
    textAlign:'center',
    marginTop: height * 35,
    marginBottom: height * 80,
  },
  icon: {
    width: 48,
    height: 48
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  // bottomTab
  bottomSheetContainer: {
    height: height * 375,
    backgroundColor: colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    alignItems:'center'
  },
  choiceLook:{
    width: 108,
    height: 36,
    borderWidth: 1,
    borderRadius: 20,
    borderStyle: 'solid',
    borderColor: '#111111',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  choiceText: {
    fontFamily: fonts.YdeB,
    fontWeight: '700',
    fontSize: 14,
    color: '#000000',
  }
});

export default DetailRecordSelect;
