import React, {useEffect, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {StyleSheet, Text} from 'react-native';
import {ApolloProvider} from '@apollo/client';
import {client} from './apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './navigation/AuthStack';
import MainStack from './navigation/MainStack';
import SplashScreen from '../App/screens/auth/SplashScreen';

const StackApp = createStackNavigator();
const screenOption = {headerShown: false};

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <StackApp.Navigator screenOptions={screenOption} presentation="modal">
          {/* 토큰 확인 중 splash */}
          {isLoading ? (
            <StackApp.Screen name="Splash" component={SplashScreen} />
          ) : !token ? (
            // 토큰 없으면 Login
            <StackApp.Screen name="Auth" component={AuthStack} />
          ) : (
            <StackApp.Screen name="HomeApp" component={MainStack} />
          )}
          {/* 토큰 있으면 main 화면 */}
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
