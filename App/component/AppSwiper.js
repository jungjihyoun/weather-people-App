import React, {useRef, useState, useEffect, useLayoutEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  frameElement,
} from 'react-native';
import {width, height} from '../styles/globalStyles';

const {width: screenWidth} = Dimensions.get('window');

const AppSwiper = props => {
  const [entries, setEntries] = useState([props.swiperItems]);

  useEffect(() => {
    setEntries(props.swiperItems);
  }, [props.swiperItems]);

  const renderItem = ({item, index}, parallaxProps) => {
    return <View style={styles.item}>{item}</View>;
  };
  return (
    <View style={styles.container}>
      <Carousel
        contentContainerCustomStyle={{alignItems: 'flex-start'}}
        sliderWidth={screenWidth}
        itemWidth={197}
        data={entries}
        renderItem={renderItem}
        onSnapToItem={index => {
          props.setCurrentIndex(index);
        }}
      />
    </View>
  );
};

export default AppSwiper;

const styles = StyleSheet.create({
  container: {
    height: 400,
  },
  item: {},
});
