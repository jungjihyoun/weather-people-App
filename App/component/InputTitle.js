import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../styles/globalStyles';

const InputTitle = ({icon, title}) => {
  return (
    <View style={styles.InputTitleArea}>
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

