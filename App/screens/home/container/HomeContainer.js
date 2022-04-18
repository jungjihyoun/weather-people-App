import React, {useEffect, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {gql, useQuery, useMutation, useReactiveVar} from '@apollo/client';
import WeatherBoard from '../component/WeatherBoard';
import TopSection from '../component/TopSection';
import {LOCATION_API} from '../../../utils/api/location';
import {GEO_API} from '../../../utils/api/geo';
import {DUST_API, Short_Weather_API} from '../../../utils/api/weather';
import {GET_USER} from '../../../graphql/USER';
import * as userStore from '../../../store/user';
import {Container} from '../../home/home.styled';

const HomeContainer = () => {
  const $userLocation = useReactiveVar(userStore.userLocationVar);
  const {loading, error, data} = useQuery(GET_USER);
  const user = data?.allUser.length !== 0 ? data?.allUser : 'null';

  const fetchLocal = async () => {
    let resultXY = {x: undefined, y: undefined};
    Geolocation.getCurrentPosition(
      async position => {
        const result = await GEO_API(
          position.coords.longitude,
          position.coords.latitude,
        );

        userStore.setAddress(
          position.coords.longitude,
          position.coords.latitude,
          result && result.documents[0].address_name,
          result && result.documents[0].region_1depth_name,
          result && result.documents[0].region_2depth_name,
          result && result.documents[0].region_3depth_name,
        );
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const fetchDust = async () => {
    const data = await Short_Weather_API(
      $userLocation.x,
      $userLocation.y,
      20220418,
      2300,
    );
    console.log(data, '날씨');
  };

  useEffect(() => {
    fetchLocal();
    fetchDust();
  }, []);

  return (
    <Container>
      <TopSection />
      <WeatherBoard $userLocation={$userLocation} />
    </Container>
  );
};

export default HomeContainer;
