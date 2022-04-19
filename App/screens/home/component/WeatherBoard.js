import React, {useEffect} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {Image, Text} from 'react-native';
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

<<<<<<< HEAD
const WeatherBoard = address => {
  console.log(address.shortWeather);
=======
const WeatherBoard = $userLocation => {
>>>>>>> parent of c3239ec (feat : apollo -> swr 로 바꾸기)
  return (
    <WeatherBoardLayout>
      <WeatherCard>
        <TitleArea>
          <IconImage source={images.sort} width={'48px'} />
<<<<<<< HEAD
          {/* <AreaName>
            {address.length
              ? address.address.documents[0].address_name
              : '위치 탐색 실패'}
          </AreaName> */}
=======
          <AreaName>{$userLocation.$userLocation.address}</AreaName>
>>>>>>> parent of c3239ec (feat : apollo -> swr 로 바꾸기)
          <IconImage source={images.right} width={'48px'} />
        </TitleArea>

        <WeatherImage source={images.weather_sunny} />

        <Row>
          <CustomText size="40px" weight={700}>
            {address.shortWeather.length &&
              address.shortWeather.filter(e => e.category === 'TMP')[0]
                .fcstValue}
            º
          </CustomText>
          <Column>
            <RowGap>
              <CustomText size="12px" weight={400}>
                최저
              </CustomText>
              <CustomText size="18px" weight={700}>
                {/* {
                  address.shortWeather.filter(e => e.category === 'TMN')[0]
                    .fcstValue
                } */}
                º
              </CustomText>
            </RowGap>
            <RowGap>
              <CustomText size="12px" weight={400}>
                최고
              </CustomText>
              <CustomText size="18px" weight={700}>
                {/* {address.length &&
                  address.shortWeather.filter(e => e.category === 'TMX')[0]
                    .fcstValue} */}
                º
              </CustomText>
            </RowGap>
          </Column>
        </Row>
        <CommentArea>
          <CustomText size="14px" weight={700} bottom={5}>
            약간 흐림 , 강수확률
            {address.shortWeather.length &&
              address.shortWeather.filter(e => e.category === 'POP')[0]
                .fcstValue}
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
            <CustomText size="14px" weight={400}></CustomText>
          </DetailItem>

          <DetailItem>
            <CustomText size="12px" weight={700} bottom={15}>
              습도
            </CustomText>
            <CustomText size="14px" weight={400}>
              {address.shortWeather.length &&
                address.shortWeather.filter(e => e.category === 'REH')[0]
                  .fcstValue}
              %
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
    </WeatherBoardLayout>
  );
};

export default WeatherBoard;
