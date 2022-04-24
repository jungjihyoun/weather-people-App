import React, {useEffect, useState} from 'react';
import {images, colors} from '../../../styles/globalStyles';
import {
  WeatherPickLayout,
  WeatherPickBorder,
  WeatherPickH1,
  WeatherPickH2,
  WeatherPickImage,
  WeatherPickSlider,
} from '../home.styled';

const WeatherPick = () => {
  const renderItem = ({item}) => {
    return <WeatherPickImage source={images.SplashImg} />;
  };

  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7]);

  return (
    <WeatherPickLayout>
      <WeatherPickBorder background={colors.prPink}>
        <WeatherPickH1>오늘 뭐 입지? </WeatherPickH1>
      </WeatherPickBorder>
      <WeatherPickBorder background={colors.prBlue} width={'195px'}>
        <WeatherPickH2>웨더피플이 골라드림</WeatherPickH2>
      </WeatherPickBorder>

      <WeatherPickSlider
        horizontal={true}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}></WeatherPickSlider>
    </WeatherPickLayout>
  );
};

export default WeatherPick;
