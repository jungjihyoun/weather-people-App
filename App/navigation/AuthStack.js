import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/auth/LoginScreen';

const StackHome = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

const AuthStack = ({navigation, route}) => {
  return (
    <StackHome.Navigator>
      <StackHome.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={navOptionHandler}
      />
    </StackHome.Navigator>
  );
};

export default AuthStack;
