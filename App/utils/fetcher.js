import {request} from 'graphql-request';
import {KAKAO_API} from '@env';

const fetcher = url => {
  return fetch(url).then(res => res.json());
};

const fetcherWithToken = url => {
  return fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `KakaoAK ${KAKAO_API}`,
      'Content-Type': 'application/json;charset=UTF-8',
    },
  }).then(res => res.json());
};

const graphqlFetcher = query => request('http://localhost:3000/graphql', query);

export {fetcher, fetcherWithToken, graphqlFetcher};
