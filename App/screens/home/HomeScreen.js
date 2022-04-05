import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {gql, useQuery, useMutation, useReactiveVar} from '@apollo/client';
import {GET_USER} from '../../graphql/USER';
import * as userStore from '../../store/user';

export const HomeScreen = () => {
  const $userStore = useReactiveVar(userStore.userVar);
  const onSelected = (name, age, gender) => {
    userStore.setUser(name, age, gender);
  };
  const {loading, error, data} = useQuery(GET_USER);
  // const [creatUser, {data, loading, error}] = useMutation(CREATE_USER);
  // const [createReport, createReportResult] = useMutation(CREATE_REPORT);

  const user = data?.allUser.length !== 0 ? data?.allUser : 'null';
  console.log(user, 'query');
  console.log($userStore, '전역상태관리 ');

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          onSelected('지현', 25, 'F');
          // creatUser({
          //   variables: {name: '마지막테스트', age: 222, gender: 'm'},
          // }).then(data =>
          //   console.log(data, 'success').catch(e => console.log(e, 'fail')),
          // );
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
