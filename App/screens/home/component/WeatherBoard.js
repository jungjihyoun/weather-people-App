import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useShortWeather from '../../../hooks/useShortWeather';
import useFetchGeo from '../../../hooks/useFetchGeo';
import useFetchDust from '../../../hooks/useFetchDust';
import useFetchAllUser from '../../../hooks/useFetchAllUser';
import {getToday, getTime} from '../../../utils/DATE';
import {images, colors} from '../../../styles/globalStyles';
import {
  WeatherCard,
  TitleArea,
  IconImage,
  WeatherImage,
  Row,
  Column,
  CustomText,
  RowGap,
  AreaName,
  CommentArea,
  Divider,
  BottomArea,
  DetailItem,
  WeatherBoardLayout,
} from '../home.styled';

const WeatherBoard = () => {
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
    <WeatherBoardLayout>
      <WeatherCard>
        <TitleArea>
          <IconImage source={images.sort} width={'48px'} />
          <AreaName>
            {userGeo ? userGeo?.documents[0].address_name : 'Loading'}
          </AreaName>
          <IconImage source={images.right} width={'48px'} />
        </TitleArea>

        <WeatherImage source={images.weather_sunny} />

        <Row>
          <CustomText size="40px" weight={700}>
            {!shortWeatherLoading
              ? shortWeather.filter(e => e.category === 'TMP')[0].fcstValue
              : ''}
            º
          </CustomText>
          <Column>
            <RowGap>
              <CustomText size="12px" weight={400}>
                최저
              </CustomText>
              {/* <CustomText size="18px" weight={700}>
                  {shortWeather.filter(e => e.category === 'TMN')[0].fcstValue}º
                </CustomText> */}
            </RowGap>
            <RowGap>
              <CustomText size="12px" weight={400}>
                최고
              </CustomText>
              {/* <CustomText size="18px" weight={700}>
                  {shortWeather.filter(e => e.category === 'TMX')[0].fcstValue}º
                </CustomText> */}
            </RowGap>
          </Column>
        </Row>
        <CommentArea>
          <CustomText size="14px" weight={700} bottom={5}>
            약간 흐림 , 강수확률{' '}
            {!shortWeatherLoading
              ? shortWeather.filter(e => e.category === 'POP')[0].fcstValue
              : ''}
            %
          </CustomText>
          <CustomText size="14px" weight={700} color={colors.prPink}>
            어제보다 5º 높음
          </CustomText>
        </CommentArea>

        <Divider />

        <BottomArea>
          <DetailItem>
            <CustomText size="12px" weight={700} bottom={15}>
              일출
            </CustomText>
            <CustomText size="14px" weight={400}></CustomText>
          </DetailItem>

          <DetailItem>
            <CustomText size="12px" weight={700} bottom={15}>
              자외선
            </CustomText>
            <CustomText size="14px" weight={400}>
              {handleSkyGrade('오존')}
            </CustomText>
          </DetailItem>

          <DetailItem>
            <CustomText size="12px" weight={700} bottom={15}>
              습도
            </CustomText>
            <CustomText size="14px" weight={400}>
              {!shortWeatherLoading
                ? shortWeather.filter(e => e.category === 'REH')[0].fcstValue
                : ''}
              %
            </CustomText>
          </DetailItem>

          <DetailItem>
            <CustomText size="12px" weight={700} bottom={15}>
              미세
            </CustomText>
            <CustomText size="14px" weight={400}>
              {handleSkyGrade('미세먼지')}
            </CustomText>
          </DetailItem>
        </BottomArea>
      </WeatherCard>
    </WeatherBoardLayout>
  );
};

export default WeatherBoard;
