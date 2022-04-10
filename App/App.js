import React, {useEffect} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {StyleSheet, Text} from 'react-native';
import {Home} from './screens/home/HomeScreen';
import {ApolloProvider} from '@apollo/client';
import {client} from './apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './navigation/BottomTab';
import MainStack from './navigation/MainStack';

const StackApp = createStackNavigator();
const screenOption = {headerShown: false};

function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <StackApp.Navigator screenOptions={screenOption} presentation="modal">
          <StackApp.Screen name="HomeApp" component={MainStack} />
        </StackApp.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
