import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {fonts, images} from '@/styles/globalStyles';
import {IconImage, TopLayout} from '../Feed.Styled';

const TopSection = () => {
  return (
    <TopLayout>
      <IconImage source={images.right} width="48px" />
      <Text style={styles.menu_title}>웨더피플</Text>
    </TopLayout>
  );
};

const styles = StyleSheet.create({
  menu_title: {
    fontFamily: fonts.suitB,
    color: '#111111',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 22,
  },
});

export default TopSection;
