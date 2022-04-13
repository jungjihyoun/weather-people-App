import React from 'react';
import {images} from '../../../styles/globalStyles';
import {IconImage, TopLayout, ImageWrapper, IconText} from '../home.styled';

const TopSection = () => {
  return (
    <TopLayout>
      <IconText>Weather People</IconText>
      <ImageWrapper>
        <IconImage source={images.search} width={'48px'} />
        <IconImage source={images.alarm} width={'48px'} />
      </ImageWrapper>
    </TopLayout>
  );
};

export default TopSection;
