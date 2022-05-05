import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import UploadContainer from './container/UploadContainer'

export const UploadScreen = () => {
  return (
   <UploadContainer />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
  },
});
