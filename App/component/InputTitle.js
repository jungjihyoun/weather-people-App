import React, {useRef, useState, useEffect, useLayoutEffect} from 'react';
import {
  View,
  Text,
  Image, StyleSheet,
} from 'react-native';
import {width, height , fonts} from '../styles/globalStyles';

const InputTitle = ({icon, title}) => {
  return (
    <View style={styles.InputTitleArea}>
      <Image
        source={icon}
        style={styles.InputTitleIcon}
      />
      <Text style={styles.InputTitleText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  InputTitleArea: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 6,
    marginTop: 24,
  },
  InputTitleIcon: {
    width: 24,
    height: 24,
    marginRight: 5
  },
  InputTitleText: {
    fontFamily:fonts.suitB,
    fontWeight:'700',
    fontSize:16,
    lineHeight:20
  },

});

export default InputTitle;

