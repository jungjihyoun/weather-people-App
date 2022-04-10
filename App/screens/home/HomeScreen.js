import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {gql, useQuery, useMutation, useReactiveVar} from '@apollo/client';
import {LOCATION_API} from '../../utils/api/location';
import {GET_USER} from '../../graphql/USER';
import * as userStore from '../../store/user';

export const HomeScreen = () => {
  const $userStore = useReactiveVar(userStore.userVar);
  const onSelected = (name, age, gender) => {
    userStore.setUser(name, age, gender);
  };
  const {loading, error, data} = useQuery(GET_USER);

  const user = data?.allUser.length !== 0 ? data?.allUser : 'null';

  const fetchLocal = async () => {
    const data = await LOCATION_API('사당동');
    console.log(data, '테스트');
  };

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          fetchLocal();
        }}>
        <Text>test !!</Text>
      </TouchableOpacity>
      <Text style={styles.container}> Weather People Home! </Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
  },
});
