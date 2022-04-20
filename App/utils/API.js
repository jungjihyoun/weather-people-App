export const GEO_API = (x, y) =>
  `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${x}&y=${y}`;

export const LOCATION_API = query =>
  `https://dapi.kakao.com/v2/local/search/address.json?query=${query}&page=45&size=30`;

export const DUST_API = sidoName =>
  `http://localhost:3000/dust?sidoName=${sidoName}`;

export const Short_Weather_API = (x, y, date, time) =>
  `http://localhost:3000/short/weather?x=${x}&y=${y}&date=${date}&time=${time}`;
