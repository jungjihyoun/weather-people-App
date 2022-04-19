import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useSWR from 'swr';
import {
  fetcher,
  fetcherWithToken,
  graphqlFetcher,
} from '../../../utils/fetchers/fetcher';
import Geolocation from 'react-native-geolocation-service';
import WeatherBoard from '../component/WeatherBoard';
import TopSection from '../component/TopSection';
import {GEO_API} from '../../../utils/api/API';
import {GET_USER} from '../../../graphql/USER';
import {Container} from '../../home/home.styled';

const HomeContainer = () => {
  const [userLocation, setUserLocation] = useState({
    longitude: '',
    latitude: '',
  });
  const {data: weather, error: errWeather} = useSWR(
    GEO_API(userLocation.longitude, userLocation.latitude),
    fetcherWithToken,
  );
  console.log(weather);

  const fetchLocal = async () => {
    Geolocation.getCurrentPosition(
      async position => {
        try {
          await AsyncStorage.setItem(
            '@userLocation',
            JSON.stringify({
              longitude: position.coords.longitude,
              latitude: position.coords.latitude,
            }),
          );
        } catch (e) {
          console.error(e);
        }
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

  const getData = async () => {
    const jsonValue = await AsyncStorage.getItem('@userLocation');
    console.log('111', jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  };

  useEffect(() => {
    fetchLocal();
  }, []);

  return (
    <Container>
      <TopSection />
      <WeatherBoard />
    </Container>
  );
};

export default HomeContainer;
