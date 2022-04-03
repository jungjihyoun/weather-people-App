import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {gql, useQuery} from '@apollo/client';

const GET_USER = gql`
  query {
    allUser {
      name
    }
  }
`;

export const Home = () => {
  const {loading, error, data} = useQuery(GET_USER);
  const user = data?.allUser.length !== 0 ? data?.allUser : 'null';
  console.log(user, '###');

  return <Text style={styles.container}> Weather People Home! </Text>;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
  },
});
