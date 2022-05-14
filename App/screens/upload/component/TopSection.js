import React from 'react';
import {StyleSheet, Text} from 'react-native'
import {fonts, images} from '../../../styles/globalStyles';
import {IconImage, TopLayout} from '../Upload.Styled';

const TopSection = ({onPostRecord}) => {
  return (
    <TopLayout onPress={()=> {onPostRecord()}}>
      <IconImage source={images.right} width='48px'/>
      <Text style={styles.menu_title}>게시물 업로드</Text>
      <Text style={styles.menu_successBtn}>완료</Text>
    </TopLayout>
  );
};

const styles = StyleSheet.create({
  menu_title: {
    fontFamily: fonts.suitB,
    color: '#111111',
    textAlign: "center",
    fontSize: 18,
    fontWeight: '700',
    lineHeight:22,
  },
  menu_successBtn: {
    fontFamily: fonts.suitB,
    color: '#A5A5A5',
    textAlign: "center",
    fontSize: 18,
    fontWeight: '700',
    lineHeight:22,
  }
});



export default TopSection;
