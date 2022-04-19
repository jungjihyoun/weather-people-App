import {gql, useQuery, useMutation} from '@apollo/client';

const GET_USER = gql`
  query {
    allUser {
      name
    }
  }
`;

const ALL_USER = gql`
  query {
    allUser {
      name
      age
      gender
    }
  }
`;

const CREATE_USER = gql`
  mutation createUser($name: String, $age: Int, $gender: String) {
    createUser(input: {name: $name, age: $age, gender: $gender}) {
      name
      age
      gender
    }
  }
`;

export {GET_USER, ALL_USER};
