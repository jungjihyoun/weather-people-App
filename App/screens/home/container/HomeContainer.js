import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from 'react-native-geolocation-service';
import WeatherBoard from '../component/WeatherBoard';
import OutfitPhotos from '../component/OutfitPhotos';
import TopSection from '../component/TopSection';
import HotPost from '../component/HotPost';
import WeatherPick from '../component/WeatherPick';
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
      <OutfitPhotos />
      <HotPost />
      <WeatherPick />
    </Container>
  );
};

export default HomeContainer;
