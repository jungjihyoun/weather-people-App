import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useFetchGeo from '@/hooks/useFetchGeo';
import {fonts, height, width, images} from '../styles/globalStyles';

const WeatherSelect = () => {
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

  const {userGeo, userGeoLoading} = useFetchGeo(
    userLocation.longitude,
    userLocation.latitude,
  );

  return (
    <View style={styles.WeatherCard}>
      <Image
        source={images.location_icon_small}
        style={styles.InputTitleIcon}
      />
      <Text style={styles.SelectText}>
        {userGeo ? userGeo?.documents[0].address_name : 'Loading'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  WeatherCard: {
    width: width * 343,
    height: height * 48,
    backgroundColor: '#62B3FF',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SelectText: {
    fontFamily: fonts.suitB,
    fontWeight: '700',
    fontSize: 16,
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
});

export default WeatherSelect;
