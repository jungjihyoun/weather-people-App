import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {fonts, height, width , images} from '../styles/globalStyles';

const WeatherSelect = () => (
    <View style={styles.WeatherCard}>
      <Image
        source={images.location_icon_small}
        style={styles.InputTitleIcon}
      />
        <Text style={styles.SelectText}>서초구 반포3동</Text>
    </View>
  );

const styles = StyleSheet.create({
  WeatherCard:{
    width:  width * 343,
    height: height * 48,
    backgroundColor: '#62B3FF',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  SelectText: {
    fontFamily: fonts.suitB,
    fontWeight: '700',
    fontSize: 16,
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
});

export default WeatherSelect;

