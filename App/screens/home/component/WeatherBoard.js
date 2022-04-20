import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useShortWeather from '../../../hooks/useShortWeather';
import useFetchAllUser from '../../../hooks/useFetchAllUser';
import useFetchGeo from '../../../hooks/useFetchGeo';
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
  const [userLocation, setUserLocation] = useState({});

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

  useEffect(() => {
    fetchAsyncLocation();
  }, []);

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

  return (
    <WeatherBoardLayout>
      {shortWeather && (
        <WeatherCard>
          <TitleArea>
            <IconImage source={images.sort} width={'48px'} />
            <AreaName>{userGeo.documents[0].address_name}</AreaName>
            <IconImage source={images.right} width={'48px'} />
          </TitleArea>

          <WeatherImage source={images.weather_sunny} />

          <Row>
            <CustomText size="40px" weight={700}>
              {shortWeather.filter(e => e.category === 'TMP')[0].fcstValue}º
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
              약간 흐림 , 강수확률
              {shortWeather.filter(e => e.category === 'POP')[0].fcstValue}%
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
              <CustomText size="14px" weight={400}></CustomText>
            </DetailItem>

            <DetailItem>
              <CustomText size="12px" weight={700} bottom={15}>
                습도
              </CustomText>
              <CustomText size="14px" weight={400}>
                {shortWeather.filter(e => e.category === 'REH')[0].fcstValue}%
              </CustomText>
            </DetailItem>

            <DetailItem>
              <CustomText size="12px" weight={700} bottom={15}>
                미세
              </CustomText>
              <CustomText size="14px" weight={400}></CustomText>
            </DetailItem>
          </BottomArea>
        </WeatherCard>
      )}
    </WeatherBoardLayout>
  );
};

export default WeatherBoard;
