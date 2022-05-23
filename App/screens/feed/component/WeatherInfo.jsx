import React, {useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useShortWeather from '@/hooks/useShortWeather';
import useFetchGeo from '@/hooks/useFetchGeo';
import useFetchDust from '@/hooks/useFetchDust';
import {getTime, getToday} from '@/utils/DATE';
import {colors, fonts, images} from '@/styles/globalStyles';
import {Column, Row, WeatherCard, WeatherImage,} from '../Feed.Styled';

const WeatherInfo = () => {
  const [userLocation, setUserLocation] = useState({
    latitude: 37.488752,
    longitude: 126.979253,
  });

  useEffect(() => {
    fetchAsyncLocation();
  }, []);

  const fetchAsyncLocation = async () => {
    try {
      const value = await AsyncStorage.getItem('@userLocation');
      if (value !== null) {
        const result = await JSON.parse(value);
        setUserLocation(result);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const {shortWeather, shortWeatherLoading} = useShortWeather(
    userLocation.longitude,
    userLocation.latitude,
    getToday(),
    getTime(),
  );

  const {userGeo, userGeoLoading} = useFetchGeo(
    userLocation.longitude,
    userLocation.latitude,
  );

  const {dust, dustErr} = useFetchDust(
    userLocation.longitude,
    userLocation.latitude,
  );

  const handleSkyGrade = type => {
    //  1 : 좋음 , 2 : 보통 , 3 : 나쁨 , 4 : 매우나쁨
    if (dust) {
      const dustResult =
        type === '오존'
          ? dust.response.body.items.map(e => e.o3Grade)
          : dust.response.body.items.map(e => e.pm10Grade);

      const result = {};
      dustResult.forEach(x => {
        result[x] = (result[x] || 0) + 1;
      });

      const maxDust = parseInt(
        Object.keys(result).find(
          key => result[key] === Math.max(...Object.values(result)),
        ),
      );

      if (maxDust < 2) {
        return '좋음';
      } else if (maxDust === 2) {
        return '보통';
      } else if (maxDust === 3) {
        return '나쁨';
      } else if (maxDust === 4) {
        return '매우나쁨';
      }
    }
  };

  // TODO : 데이터 패칭중 로딩 스켈레톤 처리
  return (
      <WeatherCard>
        <WeatherImage source={images.weather_sunny} />

        <Text style={styles.tempText}>
          {!shortWeatherLoading
            ? shortWeather.filter(e => e.category === 'TMP')[0].fcstValue
            : ''}
          º
        </Text>

        <Column>
            <Text style={styles.areaText}>
              {userGeo ? userGeo?.documents[0].address_name : 'Loading'}
            </Text>

          <Row>
            <Text style={styles.dustText}>
              미세
            </Text>
            <Text style={handleSkyGrade("미세먼지") === '좋음' ? {color: colors.prBlue , ...styles.dustText} : {color: colors.prGreen , ...styles.dustText}}>
              {handleSkyGrade('미세먼지')}
            </Text>
          </Row>
        </Column>
      </WeatherCard>

  );
};

const styles = StyleSheet.create({
  tempText: {
    fontFamily: fonts.suitB,
    color: '#111111',
    fontSize: 40,
    fontWeight: '700',
    lineHeight: 50,
    marginRight: 10,
  },
  areaText: {
    fontFamily: fonts.suitB,
    color: '#111111',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
  },
  dustText: {
    fontFamily: fonts.suitM,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    marginTop: 10,
    marginRight: 5
  },
});


export default WeatherInfo;

