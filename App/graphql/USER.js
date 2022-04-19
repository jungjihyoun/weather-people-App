import gql from 'graphql-tag';

const GET_USER = `{
  allUser {
      name
  }
}`;

const ALL_USER = `{
  allUser {
    name
    age
    gender
  }
}
`;

const CREATE_USER = `{
  mutation createUser($name: String, $age: Int, $gender: String) {
    createUser(input: {name: $name, age: $age, gender: $gender}) {
      name
      age
      gender
  }
}
`;

export {GET_USER, ALL_USER};
