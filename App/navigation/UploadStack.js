import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {UploadScreen} from '../screens/upload/UploadScreen';

const StackHome = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

const UploadStack = ({navigation, route}) => {
  return (
    <StackHome.Navigator initialRouteName="UploadScreen">
      <StackHome.Screen
        name="UploadScreen"
        component={UploadScreen}
        options={navOptionHandler}
      />
    </StackHome.Navigator>
  );
};

export default UploadStack;
