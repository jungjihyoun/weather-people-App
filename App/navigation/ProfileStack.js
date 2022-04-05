import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProfileScreen} from '../screens/profile/ProfileScreen';

const StackHome = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

const ProfileStack = ({navigation, route}) => {
  return (
    <StackHome.Navigator initialRouteName="ProfileScreen">
      <StackHome.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={navOptionHandler}
      />
    </StackHome.Navigator>
  );
};

export default ProfileStack;
