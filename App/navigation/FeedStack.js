import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {FeedScreen} from '../screens/feed/FeedScreen';

const StackHome = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

const FeedStack = ({navigation, route}) => {
  return (
    <StackHome.Navigator initialRouteName="FeedScreen">
      <StackHome.Screen
        name="FeedScreen"
        component={FeedScreen}
        options={navOptionHandler}
      />
    </StackHome.Navigator>
  );
};

export default FeedStack;
