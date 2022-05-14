import {gql} from '@apollo/client';

const GET_RECORD = gql`
  query getRecord($id: String) {
    getRecord(id: $id) {
      title
    }
  }
`;

const ALL_RECORD = gql`
  query {
    allRecord {
      _id
      image
      title
      content
      coat
      top
      bottom
      score
    }
  }
`;

const CREATE_RECORD = (title, content, detail) => `
  mutation {
    createRecord(input:{title: "${title}", content: "${content}" , detail: {coat: "babb", top: "aaa", bottom: "c", score: 1}}) {
      title
      content
      detail {
        coat
        top
        bottom
        score
      }
    }
  }
`;


export {GET_RECORD, ALL_RECORD, CREATE_RECORD};
