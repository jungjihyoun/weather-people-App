import React from 'react';
import {StyleSheet , View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import TopSection from '../component/TopSection';
import WeatherInfo from '../component/WeatherInfo'
import Feeds from '../component/Feeds'
import {ScrollContainer} from '../Feed.Styled';

type mainScreenProp = StackNavigationProp<any>;

const FeedContainer = () => {
  const navigation = useNavigation<mainScreenProp>();

  return (
    <>
      <TopSection />
      <ScrollContainer>
        <WeatherInfo/>
        <Feeds/>
      </ScrollContainer>
    </>
  );
};

export default FeedContainer;