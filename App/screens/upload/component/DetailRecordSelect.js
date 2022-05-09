import React, { useState } from 'react';
import {StyleSheet , Text , Image , View } from 'react-native'
import {TouchableOpacity} from "react-native-gesture-handler";
import WeatherModal from '@/component/WeatherModal'
import {DetailInputArea, DetailInput , DetailSelectWrapper , CloseHorizontal , OutfitChoice , ChoiceText} from '../Upload.Styled.js'
import {images , fonts , height , colors} from "@/styles/globalStyles";

const DetailRecordSelect = ({title}) => {
  const [isModalOpen , setIsModalOpen] = useState(false);
  const [ myOutfit , setMyOutfit ] = useState(null);

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
            <DetailSelectWrapper onPress={() => setMyOutfit(0)}>
              <Image style={styles.icon} source={images.face_bad}/>
              <OutfitChoice choicedBackground={myOutfit === 0 ? 'black' : 'white'}>
                <ChoiceText choicedFontColor={myOutfit === 0 ? 'white' : 'black'}>별로예요</ChoiceText>
              </OutfitChoice>
            </DetailSelectWrapper>

            <DetailSelectWrapper onPress={() => setMyOutfit(1)}>
              <Image style={styles.icon} source={images.face_soso}/>
              <OutfitChoice choicedBackground={myOutfit === 1 ? 'black' : 'white'}>
                <ChoiceText choicedFontColor={myOutfit === 1 ? 'white' : 'black'}>보통이에요</ChoiceText>
              </OutfitChoice>
            </DetailSelectWrapper>

            <DetailSelectWrapper onPress={() => setMyOutfit(2)}>
              <Image style={styles.icon} source={images.face_good}/>
              <OutfitChoice choicedBackground={myOutfit === 2 ? 'black' : 'white'}>
                <ChoiceText choicedFontColor={myOutfit === 2 ? 'white' : 'black'}>완전 찰떡!</ChoiceText>
              </OutfitChoice>
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
  // outfitChoice:{
  //   width: 108,
  //   height: 36,
  //   borderWidth: 1,
  //   borderRadius: 20,
  //   borderStyle: 'solid',
  //   borderColor: '#111111',
  //   display: 'flex',
  //   justifyContent:'center',
  //   alignItems:'center'
  // },
  // choiced: {
  //   backgroundColor: '#111111',
  //   color: '#000000'
  // },
  // choiceText: {
  //   fontFamily: fonts.YdeB,
  //   fontWeight: '700',
  //   fontSize: 14,
  //   color: '#000000',
  // }
});

export default DetailRecordSelect;
