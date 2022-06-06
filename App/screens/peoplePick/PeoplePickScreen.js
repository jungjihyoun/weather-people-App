import React from 'react';
import {StyleSheet} from 'react-native';
import {ErrorScreen} from '../error/ErrorScreen'

export const PeoplePickScreen = () => {
  return (
    <>
      <ErrorScreen />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
  },
});
