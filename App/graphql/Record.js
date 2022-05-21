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
      weather
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

const CREATE_RECORD = (title, content, detail) => `
  mutation {
    createRecord(input:{title: "${title}", content: "${content}" , weather : "[abcTTT]" ,detail: {coat: "${detail.coat}", top: "${detail.top}", bottom: "${detail.bottom}", score: ${detail.score}}}) {
      _id
      image
      weather
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

const UPDATE_IMAGE = (id, images) => `
mutation {
  updateRecord(_id: "${id}", input: {image: ${images}}) {
    title
    image
    content
    weather
    detail {
      coat
      top
      bottom
      score
    }
  }
}
`;

export {GET_RECORD, ALL_RECORD, CREATE_RECORD, UPDATE_IMAGE};
