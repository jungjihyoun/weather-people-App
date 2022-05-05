import {gql, useQuery, useMutation} from '@apollo/client';

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

const CREATE_RECORD = gql`
  mutation createRecord(
    $title: String
    $content: String
    $coat: String
    $top: String
    $bottom: String
    $score: String
  ) {
    createRecord(
      input: {
        title: $title
        content: $content
        coat: $coat
        top: $top
        bottom: $bottom
        score: $score
      }
    ) {
      title
    }
  }
`;

export {GET_RECORD, ALL_RECORD, CREATE_RECORD};
