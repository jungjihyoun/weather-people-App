import {KAKAO_API} from '@env';

export const GEO_API = async (x, y) => {
  const response = await fetch(
    `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${x}&y=${y}`,
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
