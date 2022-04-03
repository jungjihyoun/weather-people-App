import React, {useEffect} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Home} from './screens/home/Home';
import {ApolloProvider} from '@apollo/client';
import {client} from './apollo/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
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
