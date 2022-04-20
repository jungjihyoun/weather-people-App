import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from 'react-native-geolocation-service';
import WeatherBoard from '../component/WeatherBoard';
import TopSection from '../component/TopSection';
import {Container} from '../../home/home.styled';

const HomeContainer = () => {
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
      },
      error => {
        console.error(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
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
