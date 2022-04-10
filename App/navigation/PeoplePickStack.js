import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PeoplePickScreen} from '../screens/peoplePick/PeoplePickScreen';

const StackHome = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

const PeoplePickStack = ({navigation, route}) => {
  return (
    <StackHome.Navigator initialRouteName="PeoplePickStack">
      <StackHome.Screen
        name="PeoplePickStack"
        component={PeoplePickScreen}
        options={navOptionHandler}
      />
    </StackHome.Navigator>
  );
};

export default PeoplePickStack;
