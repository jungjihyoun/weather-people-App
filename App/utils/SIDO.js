export const handleSido = sido => {
  var result = '';
  if (sido === '서울특별시') {
    result = '서울';
  } else if (sido === '부산광역시') {
    result = '부산';
  } else if (sido === '대구광역시') {
    result = '대구';
  } else if (sido === '인천광역시') {
    result = '인천';
  } else if (sido === '광주광역시') {
    result = '광주';
  } else if (sido === '대전광역시') {
    result = '부산';
  } else if (sido === '울산광역시') {
    result = '울산';
  } else if (sido === '경기도') {
    result = '경기';
  } else if (sido === '강원도') {
    result = '강원';
  } else if (sido === '충청북도') {
    result = '충북';
  } else if (sido === '충청남도') {
    result = '충남';
  } else if (sido === '전라북도') {
    result = '전북';
  } else if (sido === '전라남도') {
    result = '전남';
  } else if (sido === '경상북도') {
    result = '경북';
  } else if (sido === '경상남도') {
    result = '경남';
  } else if (sido === '제주시') {
    result = '제주';
  } else if (sido === '세종시') {
    result = '세종';
  }

  return result;
};
