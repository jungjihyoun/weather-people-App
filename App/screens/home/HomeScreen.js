import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {gql, useQuery, useMutation, useReactiveVar} from '@apollo/client';
import {LOCATION_API} from '../../utils/api/location';
import {DUST_API} from '../../utils/api/weather';
import {GET_USER} from '../../graphql/USER';
import HomeContainer from './container/HomeContainer';
import * as userStore from '../../store/user';

export const HomeScreen = () => {
  return (
    <>
      <HomeContainer />
    </>
  );
};
