export const DUST_API = async sidoName => {
  const response = await fetch(
    `http://ec2-100-24-133-91.compute-1.amazonaws.com:3000/dust?sidoName=${sidoName}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    },
  );
  const json = await response.json();
  return json;
};

export const Short_Weather_API = async (x, y, date, time) => {
  const response = await fetch(
    `http://ec2-100-24-133-91.compute-1.amazonaws.com:3000/short/weather?x=${x}&y=${y}&date=${date}&time=${time}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    },
  );
  const json = await response.json();
  return json;
};
