import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import TopSection from '../component/TopSection';
import WeatherInfo from '../component/WeatherInfo'
import {Container} from '../Feed.Styled';

type mainScreenProp = StackNavigationProp<any>;

const FeedContainer = () => {
  const navigation = useNavigation<mainScreenProp>();

  return (
    <>
      <TopSection />
      <Container>
        <WeatherInfo/>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
});

export default FeedContainer;
