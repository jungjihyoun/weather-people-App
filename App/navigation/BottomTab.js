import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {mainRoutes} from '../constant/mainRoutes';

const Tab = createBottomTabNavigator();

const screenOption = {
  headerShown: false,
  tabBarLabelStyle: {
    fontSize: 12,
  },
  tabBarActiveTintColor: '#62B3FF',
};

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={screenOption} initialRouteName="Home">
      {mainRoutes.map(data => {
        return (
          <Tab.Screen
            name={data.name}
            component={data.component}
            options={{
              tabBarIcon: ({focused}) => (
                <Image
                  source={focused ? data.activeIcon : data.inactiveIcon}
                  style={{width: 30, height: 24}}
                />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomTab;
