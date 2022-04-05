import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';

const StackHome = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

const HomeStack = ({navigation, route}) => {
  return (
    <StackHome.Navigator>
      <StackHome.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={navOptionHandler}
      />
    </StackHome.Navigator>
  );
};

export default HomeStack;
