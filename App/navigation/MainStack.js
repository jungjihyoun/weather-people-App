import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTab';
import AuthStack from './AuthStack';

const Stack = createStackNavigator();

function MainStack() {
  const screenOption = {headerShown: false};

  return (
    <Stack.Navigator screenOptions={screenOption} presentation="card">
      <Stack.Screen name="Tab" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}

export default MainStack;
