import React, {useEffect, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {gql, useQuery, useMutation, useReactiveVar} from '@apollo/client';
import WeatherBoard from '../component/WeatherBoard';
import TopSection from '../component/TopSection';
<<<<<<< HEAD
import {GEO_API, Short_Weather_API} from '../../../utils/api/API';
=======
import {LOCATION_API} from '../../../utils/api/location';
import {GEO_API} from '../../../utils/api/geo';
import {DUST_API, Short_Weather_API} from '../../../utils/api/weather';
>>>>>>> parent of c3239ec (feat : apollo -> swr 로 바꾸기)
import {GET_USER} from '../../../graphql/USER';
import * as userStore from '../../../store/user';
import {Container} from '../../home/home.styled';

const HomeContainer = () => {
<<<<<<< HEAD
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
=======
  const $userLocation = useReactiveVar(userStore.userLocationVar);
  const {loading, error, data} = useQuery(GET_USER);
  const user = data?.allUser.length !== 0 ? data?.allUser : 'null';
>>>>>>> parent of c3239ec (feat : apollo -> swr 로 바꾸기)

  const fetchLocal = async () => {
    let resultXY = {x: undefined, y: undefined};
    Geolocation.getCurrentPosition(
      async position => {
<<<<<<< HEAD
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
=======
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
>>>>>>> parent of c3239ec (feat : apollo -> swr 로 바꾸기)
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

<<<<<<< HEAD
=======
  const fetchDust = async () => {
    const data = await Short_Weather_API(
      $userLocation.x,
      $userLocation.y,
      20220418,
      2300,
    );
    console.log(data, '날씨');
  };

>>>>>>> parent of c3239ec (feat : apollo -> swr 로 바꾸기)
  useEffect(() => {
    fetchLocal();
    fetchDust();
  }, []);

  return (
    <Container>
      <TopSection />
<<<<<<< HEAD
      <WeatherBoard address={address} shortWeather={shortWeather} />
=======
      <WeatherBoard $userLocation={$userLocation} />
>>>>>>> parent of c3239ec (feat : apollo -> swr 로 바꾸기)
    </Container>
  );
};

export default HomeContainer;
