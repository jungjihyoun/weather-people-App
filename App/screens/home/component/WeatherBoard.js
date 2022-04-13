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

const WeatherBoard = () => {
  return (
    <WeatherBoardLayout>
      <WeatherCard>
        <TitleArea>
          <IconImage source={images.sort} width={'48px'} />
          <AreaName>동작구 사당동</AreaName>
          <IconImage source={images.right} width={'48px'} />
        </TitleArea>

        <WeatherImage source={images.weather_sunny} />

        <Row>
          <CustomText size="40px" weight={700}>
            5 º
          </CustomText>
          <Column>
            <RowGap>
              <CustomText size="12px" weight={400}>
                최저
              </CustomText>
              <CustomText size="18px" weight={700}>
                -3 º
              </CustomText>
            </RowGap>
            <RowGap>
              <CustomText size="12px" weight={400}>
                최고
              </CustomText>
              <CustomText size="18px" weight={700}>
                9 º
              </CustomText>
            </RowGap>
          </Column>
        </Row>
        <CommentArea>
          <CustomText size="14px" weight={700} bottom={5}>
            약간 흐림 , 강수확률 0%
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
            <CustomText size="14px" weight={400}>
              {' '}
              6 : 37{' '}
            </CustomText>
          </DetailItem>

          <DetailItem>
            <CustomText size="12px" weight={700} bottom={15}>
              자외선
            </CustomText>
            <CustomText size="14px" weight={400}>
              보통
            </CustomText>
          </DetailItem>

          <DetailItem>
            <CustomText size="12px" weight={700} bottom={15}>
              습도
            </CustomText>
            <CustomText size="14px" weight={400}>
              55%
            </CustomText>
          </DetailItem>

          <DetailItem>
            <CustomText size="12px" weight={700} bottom={15}>
              미세
            </CustomText>
            <CustomText size="14px" weight={400}>
              좋음
            </CustomText>
          </DetailItem>
        </BottomArea>
      </WeatherCard>
    </WeatherBoardLayout>
  );
};

export default WeatherBoard;
