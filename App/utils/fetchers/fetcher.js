import axios from 'axios';
import {request} from 'graphql-request';
import {graphQL_URL} from '@env';
import {KAKAO_API} from '@env';

const fetcher = url => {
  return fetch(url).then(res => res.json());
};

//fetcher
const fetcherWithToken = url => {
  return fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `KakaoAK ${KAKAO_API}`,
      'Content-Type': 'application/json;charset=UTF-8',
    },
  }).then(res => res.json());
};

const graphqlFetcher = query => request(graphQL_URL, query);

export {fetcher, fetcherWithToken, graphqlFetcher};
