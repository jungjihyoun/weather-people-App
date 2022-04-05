import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTab';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      presentation="card">
      <Stack.Screen name="Tab" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}

export default MainStack;
