import React, {useEffect, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {gql, useQuery, useMutation, useReactiveVar} from '@apollo/client';
import WeatherBoard from '../component/WeatherBoard';
import TopSection from '../component/TopSection';
import {GEO_API, Short_Weather_API} from '../../../utils/api/API';
import {GET_USER} from '../../../graphql/USER';
import * as userStore from '../../../store/user';
import {Container} from '../../home/home.styled';

const HomeContainer = () => {
  const [userLocation, setUserLocation] = useState({
    longitude: '',
    latitude: '',
  });
  const {data: address, error: errWeather} = useSWR(
    GEO_API(userLocation.longitude, userLocation.latitude),
    fetcherWithToken,
  );
  const {data: shortWeather, error: errShortWeather} = useSWR(
    Short_Weather_API(
      userLocation.longitude,
      userLocation.latitude,
      20220419,
      2200,
    ),
    fetcher,
  );

  const fetchLocal = async () => {
    let resultXY = {x: undefined, y: undefined};
    Geolocation.getCurrentPosition(
      async position => {
        // try {
        //   await AsyncStorage.setItem(
        //     '@userLocation',
        //     JSON.stringify({
        //       longitude: position.coords.longitude,
        //       latitude: position.coords.latitude,
        //     }),
        //   );
        // } catch (e) {
        //   console.error(e);
        // }
        setUserLocation({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  useEffect(() => {
    fetchLocal();
    fetchDust();
  }, []);

  return (
    <Container>
      <TopSection />
      <WeatherBoard address={address} shortWeather={shortWeather} />
    </Container>
  );
};

export default HomeContainer;
