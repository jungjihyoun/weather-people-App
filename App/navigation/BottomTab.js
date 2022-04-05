import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import FeedStack from './FeedStack';
import ProfileStack from './ProfileStack';
import WeatherPeopleStack from './WeatherPeopleStack';
import UploadStack from './UploadStack';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="WeatherPeople" component={WeatherPeopleStack} />
      <Tab.Screen name="Upload" component={UploadStack} />
      <Tab.Screen name="Feed" component={FeedStack} />
      <Tab.Screen name="profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default BottomTab;
