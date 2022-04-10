import {KAKAO_API} from '@env';

export const LOCATION_API = async query => {
  const response = await fetch(
    `https://dapi.kakao.com/v2/local/search/address.json?query=${query}&page=45&size=30`,
    {
      method: 'GET',
      headers: {
        Authorization: `KakaoAK ${KAKAO_API}`,
        'Content-Type': 'application/json;charset=UTF-8',
      },
    },
  );
  const json = await response.json();
  return json;
};
