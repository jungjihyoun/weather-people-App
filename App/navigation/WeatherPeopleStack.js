import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {WeatherPeopleScreen} from '../screens/weatherPeople/WeatherPeopleScreen';

const StackHome = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

const WeatherPeopleStack = ({navigation, route}) => {
  return (
    <StackHome.Navigator initialRouteName="WeatherPeopleScreen">
      <StackHome.Screen
        name="WeatherPeopleScreen"
        component={WeatherPeopleScreen}
        options={navOptionHandler}
      />
    </StackHome.Navigator>
  );
};

export default WeatherPeopleStack;
